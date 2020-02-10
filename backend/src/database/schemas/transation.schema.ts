import { model, Schema } from 'mongoose'

import { TransationInterface } from '../interfaces/transation.interface'

const TransationSchema = new Schema({

  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  descriptons: { type: String, default: '' },
  value: { type: Number, default: 0 },
  destinationCpf: { type: String, required: true },
  destinationAgency: { type: Number },
  destinationAccount: { type: Number },
  originBalance: { type: Number },
  origin: { type: Schema.Types.ObjectId, ref: 'User' },
  destination: {type: Schema.Types.ObjectId, ref: 'User' },
  expireAt: { type: Date, default: Date.now, expires: '1y' },
  Date: { type: Date, default: new Date()}

}, { timestamps: true })

export default model<TransationInterface>('Transation', TransationSchema)
