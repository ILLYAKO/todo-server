import { Document } from "mongoose"

export interface ITodo extends Document {
  name: string
  status: boolean
}