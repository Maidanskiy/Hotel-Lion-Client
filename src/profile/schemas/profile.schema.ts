import * as mongoose from 'mongoose'

export const ProfileSchema = new mongoose.Schema({
  email: String,
  password: String
})
