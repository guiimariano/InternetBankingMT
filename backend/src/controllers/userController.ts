import { Request, Response } from 'express'

import User from '../database/schemas/userSchema'

class UserController {

  public async create (req: Request, res: Response): Promise<Response> {

    const { cpf } = req.body
    const createUsers = req.body

    if(await User.findOne({ cpf })) {
      return res.status(400).json({ error: 'This CPF is already assign to one account' })
    }

    const user = await User.create(createUsers)

    return res.json(user)
  }

  public async index (_req: Request, res: Response): Promise<Response> {

    const users = await User.find()

    return res.json(users)
    
  }
}

export default new UserController()