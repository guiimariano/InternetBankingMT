import { model, Schema } from 'mongoose'

import { UsersInterface } from '../interfaces/user.interface'

const UserSchema = new Schema({
 name: String,
 celPhone: Number,
 preferedName: String,
 email: String,
 cpf: Number,
 isVerified: Boolean
}, {
  timestamps: true
})

export default model<UsersInterface>('User', UserSchema)