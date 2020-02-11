import { Document } from 'mongoose'

export interface TransationInterface extends Document {

  userId: String,
  descriptons: String,
  value: Number,
  destinationCpf: String,
  destinationAgency: Number,
  destinationAccount: Number,
  originBalance: Number,
  origin: Number,
  destination: Number,
  expireAt: Date,
  Date: Date,

}
