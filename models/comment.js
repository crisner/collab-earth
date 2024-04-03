import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
    note_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note',
        required: true,
      },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      created_at: {
        type: Date,
        default: Date.now,
      },
      updated_at: {
        type: Date,
      },
});

const Comment = mongoose.model.Comment || mongoose.model("Comment", commentSchema);
export default Comment;
