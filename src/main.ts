import * as dotenv from 'dotenv'
dotenv.config()
import Express from 'express'
import path from 'path'
import layouts from 'express-ejs-layouts'
import mongoose from 'mongoose'
import methodOverride from 'method-override'
import router from './routes'

interface ErrorWithStatus extends Error {
  status?: number;
}

mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
import './models/commentModel'
import './models/blogModel'

const app = Express()
const port = 3000

app.use(methodOverride('_method', {
  methods: ['POST', 'GET']
}))

app.use(Express.urlencoded({ extended: true }))
app.use(Express.json())

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(layouts)
app.use(Express.static(__dirname + '/public'))

app.use('/', router)

app.use(function (err: ErrorWithStatus, req: Express.Request, res: Express.Response, next: Express.NextFunction) {
  console.log(err.stack)
  res.status(err.status || 500).send(err.message)
})

app.listen(port, () => {
  console.log('server start')
})