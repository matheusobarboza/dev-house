import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  email: string,
}

const UserSchema = new Schema({
  email: String,
  id: Schema.Types.ObjectId
})

export default model<UserInterface>('User', UserSchema)
