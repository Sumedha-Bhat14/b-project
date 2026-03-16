
import Job from "../models/Job.js";

export const addJob = async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json({ message: "Job Added" });
};

export const getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

export const deleteJob = async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Job Deleted" });
};