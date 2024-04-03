import mongoose, {Schema} from "mongoose";

const sightingSchema = new Schema({
    date: {
      type: Date,
      required: true,
    },
    time: Date,
    location_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Location',
      required: true,
    },
    count: Number,
    observer: String,
    notes: String,
    species_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Species',
      required: true,
    },
  });

const Sighting = mongoose.model.Sighting || mongoose.model("Sighting", sightingSchema);
export default Sighting;
