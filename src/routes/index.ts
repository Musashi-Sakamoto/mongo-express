import Router from 'express-promise-router'
import blogRoutes from './blogRoutes'
import homeRoutes from './homeRoutes'
import commentRoutes from './commentRoute'

const router = Router()

router.use('/blogs', blogRoutes)
router.use('/comments', commentRoutes)
router.use('/', homeRoutes)

export default router