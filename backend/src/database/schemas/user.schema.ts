import { model, Schema } from 'mongoose'

import UsersInterface from '../interfaces/user.interface'

const UserSchema = new Schema({
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
   required: true,
   unique: true,
   lowercase: true
  },
 cpf: {
   type: Number,
   unique: true,
   required: true
  },
  password: {
    type: String
  },
 isVerified: {
   type: Boolean,
   default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

export default model<UsersInterface>('User', UserSchema)