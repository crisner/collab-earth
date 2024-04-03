import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
    data_point_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DataPoint',
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
      visibility: {
        type: String,
        enum: ['public', 'researchers', 'admins'],  // Visibility options
        required: true,
      },
    
});

const Note = mongoose.model.Note || mongoose.model("Note", noteSchema);
export default Note;
