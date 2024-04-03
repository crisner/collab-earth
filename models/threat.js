import mongoose, { Schema } from "mongoose";

const threatSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
});

const Threat = mongoose.model.Threat || mongoose.model("Threat", threatSchema);
export default Threat;
