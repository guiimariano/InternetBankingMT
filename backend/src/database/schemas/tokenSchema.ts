import { Document, model, Schema } from 'mongoose'

interface TokenInterface extends Document {
  userId: string,
  token: string,
}

const TokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  token: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    expires: '1h'
  }
}, {timestamps: true})

export default model<TokenInterface>('Token', TokenSchema)