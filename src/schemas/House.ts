import { Schema, model, Document } from 'mongoose'

interface HouseInterface extends Document {
  thumbnail: string,
  description: string,
  price: number,
  location: string,
  status: boolean,
}

const HouseSchema = new Schema({
  thumbnail: String,
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

export default model<HouseInterface>('House', HouseSchema)
