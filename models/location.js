import mongoose, {Schema} from "mongoose";

const locationSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    description: String,
    geometry: {
      type: { type: String, default: "Point" },
      coordinates: [Number],
    },
  });
  
  locationSchema.index({ geometry: "2dsphere" }); // Enable spatial queries
  

const Location = mongoose.model.Location || mongoose.model("Location", locationSchema);
export default Location;
