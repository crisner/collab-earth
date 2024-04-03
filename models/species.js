import mongoose, {Schema} from "mongoose";

const speciesSchema = new Schema({
  scientific_name: {
    type: String,
    required: true,
  },
  common_name: String,
  conservation_status: String,
  description: String,
});

const Species = mongoose.model.Species || mongoose.model("Species", speciesSchema);
export default Species;
