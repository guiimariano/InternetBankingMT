import { Document, model, Schema } from 'mongoose'

interface Account extends Document {

  userId: string,
  agency: number,
  accountNumber: number,
  cpf: number

}

const AccountSchema = new Schema({
  userId: String,
  agency: Number,
  accountNumber: Number,
  cpf: Number
}, { timestamps: true } )

export default model<Account>('Account', AccountSchema)
