import mongoose, { Schema } from "mongoose";

const dataPointSchema = new Schema({
  data_point_type: {
    type: String,
    required: true,
    enum: ['species', 'habitat', 'threat', 'sighting'],
  },
  reference_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  // Add a ref in reference_id to define the referenced model based on "data_point_type"
  created_by: {  // Applicable to sightings and threats
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  is_public: {  // Applicable to sightings and threats
    type: Boolean,
    default: false,
  },
});

const DataPoint = mongoose.model.DataPoint || mongoose.model("DataPoint", dataPointSchema);
export default DataPoint;
