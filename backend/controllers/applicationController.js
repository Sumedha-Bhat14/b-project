
import Application from "../models/Application.js";

export const applyJob = async (req, res) => {
  const application = new Application(req.body);
  await application.save();
  res.json({ message: "Applied Successfully" });
};

export const getApplications = async (req, res) => {
  const apps = await Application.find();
  res.json(apps);
};