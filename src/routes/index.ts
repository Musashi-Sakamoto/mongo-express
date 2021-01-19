import Router from 'express-promise-router'
import blogRoutes from './blogRoutes'
import homeRoutes from './homeRoutes'

const router = Router()

router.use('/blogs', blogRoutes)
router.use('/', homeRoutes)

export default router