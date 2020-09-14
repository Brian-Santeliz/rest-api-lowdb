const {Router } =  require('express')
const controller = require('../controllers')
const router = Router()

router.get('/', controller.getController)
router.get('/:id', controller.getByIdController)

router.post('/', controller.postController)
router.put('/:id', controller.putController)
router.delete('/:id', controller.deleteController)

module.exports = router

