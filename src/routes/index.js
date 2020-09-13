const {Router } =  require('express')
router = Router()

router.get('/', (req,res)=>{
    res.status(200).json({
        "mensaje":"Bienvenido a mi api"
    })
})

module.exports = router

