
router.get("/jobs", async (req, res) => {
  const jobs = await job.find();
  res.json(jobs);
});
