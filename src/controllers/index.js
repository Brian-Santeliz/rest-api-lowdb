const {getConnection} = require('../database')
const  shortid = require('shortid')

const getController = (req,res)=>{
    const properties = getConnection().get('propiedades').value()
    res.status(200).json({data:properties, totalEdificaciones:properties.length})
}

const getByIdController = ()=>{
    const {id} = req.params.id
    const properties = getConnection().get('propiedades').find({id})
   if(!properties){
       return res.status(404).json('Este dato no existe.')
   }
   res.status(200).json(properties)
}

const createController = (req,res)=>{
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


module.exports={
    getController,
    getByIdController,
    createController
}

