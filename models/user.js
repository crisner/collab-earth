import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
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
    }, // Assuming hashed password storage
    first_name: String,
    last_name: String,
    role: {
      type: String,
      enum: ["visitor", "user", "admin"],
      required: true,
    },
    selectedRole: {
      type: [String], // Array of role values (e.g., '1', '2')
    },
    is_verified: {
      type: Boolean,
      default: false, // Applicable only to users
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
