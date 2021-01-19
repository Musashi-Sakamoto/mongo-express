import mongoose, { Schema, Document } from 'mongoose'

export interface BlogDoc extends Document {
  title: String
  body: String
  comments: []
  likes: []
  dislikes: []
}

const blogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    body: {
      type: String,
      trim: true,
      required: true,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
    likes: {
      type: Number,
    },
    dislikes: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<BlogDoc>('Blog', blogSchema)