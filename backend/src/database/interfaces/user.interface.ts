import * as mongoose from 'mongoose'

interface UsersInterface extends mongoose.Document {
  name?: string,
  celPhone?: number,
  preferedName?: string,
  email?: string,
  cpf?: number,
  password?: String,
  token?: string,
  isVerified?: boolean
}

export default UsersInterface
