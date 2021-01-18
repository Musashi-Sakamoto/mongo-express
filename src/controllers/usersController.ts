import { Request, Response, NextFunction} from 'express'
import User from '../models/userModel'

export const index = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find({}).exec()
    res.render('users/index', { users })
  } catch (error) {
    next(error)
  }
}

export const newPage = async (req: Request, res: Response, next: NextFunction) => {
  res.render('users/new')
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
    await User.create(req.body)
    res.redirect('/users')
  } catch (err) {
    next(err)
  }
}

export const edit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    console.log('user: ', user)
    res.render('users/edit', { user })
  } catch (err) {
    next(err)
  }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    console.log(req.body)
    await User.findByIdAndUpdate(id, {$set: req.body})
    res.redirect('/users')
  } catch (err) {
    next(err)
  }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    console.log(req.body)
    await User.findByIdAndRemove(id)
    res.redirect('/users')
  } catch (err) {
    next(err)
  }
}
