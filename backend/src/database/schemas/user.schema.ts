import * as bcrypt from 'bcryptjs'
import crypto from 'crypto'
import { NextFunction } from 'express'
import JWT from 'jsonwebtoken'
import * as mongoose from 'mongoose'

import UsersInterface from '../interfaces/user.interface'
import Token from './tokenSchema'

// mongoose.Promise = global.Promise

const HASH_SALT = 8
const JWT_SECRET: string = process.env.APP_JWT_SECRET as string

const UserSchema = new mongoose.Schema({
 name: {
   type: String,
   required: true
  },
 celPhone: {
   type: Number
  },
 preferedName: {
   type: String
  },
 email: {
   type: String,
   required: 'Email is required',
   unique: true,
   lowercase: true
  },
 cpf: {
   type: Number,
   unique: true,
   required: true
  },
  password: {
    type: String,
    required: true,
    max: 100
  },
 isVerified: {
   type: Boolean,
   default: false
  },
  resetPasswordToken: {
    type: String,
    required: false
  },
  resetPasswordExpires: {
    type: Date,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

UserSchema.pre<UsersInterface>('save', function(next: NextFunction) {
  const user = this as any

  if (!user.isModified('password')) return next()

  try {
    bcrypt.genSalt(HASH_SALT, function(err, salt) {
      if (err) return next(err)
      
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err)
        
        user.password = hash
        next()
      })
    })
    
  } catch (error) {
    return console.log(error)
   
  }
})

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today)
  expirationDate.setDate(today.getDate() + 60) //TODO verifie how much this retur

  let payload = {
    id: this._id,
    name: this.name,
    preferedName: this.preferedName,
    email: this.email,
  }

  return JWT.sign(payload, JWT_SECRET, {
    expiresIn: (expirationDate.getTime() / 1000, 10)
  })
}

UserSchema.methods.generatePasswordReset = function () {
  this.resetPasswordToken = crypto.randomBytes(20).toString('hex')
  this.resetPasswordExpires = Date.now() + 3600000 //expire in 1h
}

UserSchema.methods.generateVerificationToken = function() {
  let payload = {
    userId: this._id,
    token: crypto.randomBytes(20).toString('hex')
  }

  return new Token(payload)
}


// UserSchema.pre<UsersInterface>('save', async function (next: NextFunction) {
//   // const user = (this as any)
//   // this as any

//   if(!this.isModified('passwor')) return next()

//   this.password = await bcrypt.hash(this.password as any, HASH_SALT)
  
// })

export default mongoose.model<UsersInterface>('User', UserSchema)