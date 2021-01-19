import mongoose, { Schema, Document } from 'mongoose'

export interface CommentDoc extends Document {
  author: String
  comment: String
}

const commentSchema: Schema = new Schema(
  {
    author: {
      type: String,
      trim: true,
      required: true,
    },
    comment: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<CommentDoc>('Comment', commentSchema)