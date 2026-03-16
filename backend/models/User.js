
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String, // admin / employee / jobseeker
});

export default mongoose.model("User", userSchema); 