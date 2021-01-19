import { Request, Response, NextFunction} from 'express'
import Comment from '../models/commentModel'
import Blog from '../models/blogModel'

export const newPage = async (req: Request, res: Response, next: NextFunction) => {
  const { blogId } = req.params;
  const blog = await Blog.findById(blogId)

  console.log('blogId: ', blogId)
  res.render('comments/new', { blog })
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
    const comment = await Comment.create(req.body)
    const blog = await Blog.findById(req.body.blogId)
    blog.comments.push(comment)
    await blog.save()
    res.redirect('/blogs')
  } catch (err) {
    next(err)
  }
}