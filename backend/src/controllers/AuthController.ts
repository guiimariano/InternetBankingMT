import sendgridMail from '@sendgrid/mail'
import { Request, Response } from 'express'

import Token from '../database/schemas/tokenSchema'
import User from '../database/schemas/userSchema'

sendgridMail.setApiKey(process.env.APP_SENDGRID_API_KEY as string)

class AuthController {
  public async create (req: Request, res: Response) {
    try {
      const { cpf } = req.body
      const createUser = req.body
      
      if(await User.findOne({ cpf })) {
        return res.status(400).json({ message: `O bolas, este CPF: ${cpf} já está associado a outra conta!`})
      }

      const newUser = new User({ ...createUser})
      const user = await newUser.save()

      this.sendEmail(user, req, res)

    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
      
    }
  }

  public async login (req: Request, res: Response) {
    try {
      const { cpf, password } = req.body
      const user = await User.findOne({ cpf })

      if (!user) {
        return res.status(400).json({ message: `Oppss, o CPF: ${cpf} não esta associado 
        a nunhuma conta.<br> Aproveita abre sua conta fácil agora.
         ${'http://localhost/users/create'}`})

      }

      if (!await user.comparePassword(password)) {
        res.status(400).json({ message: 'A senha incorreta' })
      }

      if (!user.isVerified) {
        return res.status(400)
          .json({ type: 'not-verified', message: 'Esta conta ainda não foi verificada' })
      }

      res.status(200).json({ token: user.generateJWT(), user: user }) // TODO test without one user

    } catch (error) {
      res.status(500).json({ message: error.message })
      
    }
  }

  public async verify (req: Request, res: Response) {
    if(!req.params.token) {
      return res.status(400)
      .json({ message: 'Desculpa, você precisa estar logado para acessar esta a sua conta' })
    }

    try {
      const token = await Token.findOne({ token: req.params.token })

      if (!token){
        return res.status(400).json({ message: 'sessao expirada' })
      }
      
      User.findOne({ _id: token.userId }, (_err, user) => {
        if (!user) return res.status(400).json({ message: 'Usuário não encontrado' })
      
        if (user.isVerified) {
          return res.status(400).json({ message: 'Este usuário já foi verificado' })
        }

        user.isVerified = true
        user.save(function (err) {
          if (err) return res.status(500).json({ message: err.message })

          res.status(200).json({ message: 'A sua conta foi verificada com sucesso' })
        })
      })
      
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  public async resendToken (req: Request, res: Response) {
    try {
      const { cpf } = req.body
      const user = await User.findOne({ cpf })

      if(!user) {
        return res.status(400)
          .json({ message: `O CPF: ${cpf} não está associado a nenhuma conta, 
          verifica o CPF e tenta novamente.` })
      }

      if(user.isVerified) {
        return res.status(400).json({ message: 'Esta conta já foi verificada, por favor faça o login'})
      }

      this.sendEmail(user, req, res)
    } catch (error) {
      res.status(500).json({ message: error.message })
      
    }
  }

  public async sendEmail (user: any, req: Request, res: Response){
    const token = user.generateVerificationToken()

    token.save(function (err: any) {
      if (err) return res.status(500).json({ message: err.message })

      const { host } = req.headers
      let link = `http://${host}/api/auth/verify${token.token}` //TODO Teste with one token letter

      const MailFrom: string = process.env.APP_FROM_EMAIL as string
      const mailOptions = {
        to: user.email as string,
        from: MailFrom,
        subject: 'MB Bank: Verificação de conta',
        text: `Olá ${user.preferedName}\
        Este email se refere a verificação da sua conta na MB Bank.\n\n
        Por favor click no link ${link} para verificar a sua conta.\n
        Ignore este email se não pediu uma verificação de conta.`
      } //TODO NEED TO BE REFACTORED

      sendgridMail.send(mailOptions).then((error: any) => {
          if(error) return res.status(500).json({ message: error.message })
          res.status(200).json({ message: `Um email de verificação foi enviado para ${user.email}.` })
      })
    })
  }

}

export default new AuthController()

