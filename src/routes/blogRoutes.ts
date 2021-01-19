import Express from 'express'
import * as blogsController from '../controllers/blogsController'
import * as commentsController from '../controllers/commentsController'

const router = Express.Router()

router.get('/', blogsController.index)
router.get('/new', blogsController.newPage)
router.post('/create', blogsController.create)
router.get('/:id/edit', blogsController.edit)
router.put('/:id/update', blogsController.update)
router.delete('/:id/delete', blogsController.remove)

router.get('/:blogId/comments/new', commentsController.newPage)

export default router