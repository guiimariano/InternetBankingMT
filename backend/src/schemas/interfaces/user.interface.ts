import { Document } from 'mongoose'

export interface UsersInterface extends Document {
  name?: string,
  celPhone?: number,
  preferedName?: string,
  email?: string,
  cpf?: number,
  token?: string
  isVerified?: boolean
}
