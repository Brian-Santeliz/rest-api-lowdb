const {Router } =  require('express')
const controller = require('../controllers')
const router = Router()

router.get('/', controller.getController)
router.get('/:id')

router.post('/', controller.createController)
router.put('/:id')
router.delete('/:id')

module.exports = router

