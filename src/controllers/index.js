const {getConnection} = require('../database')
const  shortid = require('shortid')

const getController = (req,res)=>{
    const properties = getConnection().get('propiedades').value()
    res.status(200).json({data:properties, totalEdificaciones:properties.length})
}

const getByIdController = (req,res)=>{
    const {id} = req.params
    const properties = getConnection().get('propiedades').find({id})
    res.status(200).json(properties)
}

const postController = (req,res)=>{
    const {edificacion,ancho,largo,habitaciones} = req.body
    const newPropertie = {
        id:shortid.generate(),
        edificacion,
        ancho,
        largo,
        habitaciones
    }
    getConnection().get('propiedades').push(newPropertie).write()
    res.status(200).json(newPropertie)
}

const putController = async(req,res)=>{
    const {id} = req.params
    const properties = await getConnection().get('propiedades').find({id}).assign(req.body).write()
    res.status(200).json(properties);
}
const deleteController = (req,res)=>{
    const {id} = req.params
    const properties = getConnection().get('propiedades').remove({id}).write()
    res.status(200).json({msg:'Edificacion destruida', data:properties})
}
module.exports={
    getController,
    getByIdController,
    postController,
    deleteController,
    putController
}

