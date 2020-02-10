import { model, Schema } from 'mongoose'

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

export default model('Token', TokenSchema)