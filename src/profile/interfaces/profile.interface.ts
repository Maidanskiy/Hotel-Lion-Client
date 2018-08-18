import { Document } from 'mongoose'

export interface IProfile extends Document {
  readonly email: string
  readonly password: string
}
