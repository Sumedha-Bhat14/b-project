
import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  jobId: String,
  userId: String,
});

export default mongoose.model("Application", applicationSchema);