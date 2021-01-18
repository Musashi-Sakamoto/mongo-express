import Router from 'express-promise-router'
import userRoutes from './userRoutes'
import homeRoutes from './homeRoutes'

const router = Router()

router.use('/users', userRoutes)
router.use('/', homeRoutes)

export default router