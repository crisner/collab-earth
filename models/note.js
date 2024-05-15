import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
    data_point_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DataPoint',
        required: false,
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
      visibility: {
        type: String,
        enum: ["visitor", "user", "admin"],  // Visibility options
        required: true,
      },
      allow_collaboration: {
        type: Boolean,
        default: false, 
      },
      collaborators: {
        type: [String],
      },
});

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);
export default Note;
