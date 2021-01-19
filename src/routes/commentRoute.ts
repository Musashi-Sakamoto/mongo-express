import Express from 'express'
import * as commentsController from '../controllers/commentsController'

const router = Express.Router()

router.post('/create', commentsController.create)

export default router