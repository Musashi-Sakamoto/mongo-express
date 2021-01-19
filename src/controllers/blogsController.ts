import { Request, Response, NextFunction} from 'express'
import Blog from '../models/blogModel'

export const index = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const blogs = await Blog.find({}).exec()
    res.render('blogs/index', { blogs })
  } catch (error) {
    next(error)
  }
}

export const newPage = async (req: Request, res: Response, next: NextFunction) => {
  res.render('blogs/new')
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
    await Blog.create(req.body)
    res.redirect('/blogs')
  } catch (err) {
    next(err)
  }
}

export const edit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const blog = await Blog.findById(id)
    console.log('blog: ', blog)
    res.render('blogs/edit', { blog })
  } catch (err) {
    next(err)
  }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    console.log(req.body)
    await Blog.findByIdAndUpdate(id, {$set: req.body})
    res.redirect('/blogs')
  } catch (err) {
    next(err)
  }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    console.log(req.body)
    await Blog.findByIdAndRemove(id)
    res.redirect('/blogs')
  } catch (err) {
    next(err)
  }
}
