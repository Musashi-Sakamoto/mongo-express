import Express from 'express'
import * as usersController from '../controllers/usersController'

const router = Express.Router()

router.get('/', usersController.index)
router.get('/new', usersController.newPage)
router.post('/create', usersController.create)
router.get('/:id/edit', usersController.edit)
router.put('/:id/update', usersController.update)
router.delete('/:id/delete', usersController.remove)

export default router