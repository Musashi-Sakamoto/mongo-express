import { Request, Response} from 'express'

export const index = (req: Request, res: Response) => {
  res.send('<h1>Top Page</h1>')
}