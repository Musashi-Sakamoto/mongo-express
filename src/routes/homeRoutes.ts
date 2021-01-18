import Express from 'express'
import * as homeController from '../controllers/homeController'

const router = Express.Router()

router.get('/', homeController.index)

export default router
