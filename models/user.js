import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },  // Assuming hashed password storage
      first_name: String,
      last_name: String,
      role: {
        type: String,
        enum: ['visitor', 'researcher', 'admin'],
        required: true,
      },
      is_verified: {
        type: Boolean,
        default: false,  // Applicable only to researchers
      },
});

const User = mongoose.model.User || mongoose.model("User", userSchema);
export default User;
