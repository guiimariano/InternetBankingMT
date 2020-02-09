import { Request, Response } from 'express'

import UserSchema from '../database/schemas/user.schema'

class UserController {

  public async create (req: Request, res: Response) {

    const { cpf } = req.body

    if(await UserSchema.findOne({ cpf })) {
      return res.status(400).json({ error: 'This CPF is already assign in one account' })
    }

    const user = await UserSchema.create(req.body)

    return res.json(user)
  }
}

export default new UserController()