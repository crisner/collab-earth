import mongoose, { Schema } from "mongoose";

const habitatSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
});

const Habitat = mongoose.model.Habitat || mongoose.model("Habitat", habitatSchema);
export default Habitat;
