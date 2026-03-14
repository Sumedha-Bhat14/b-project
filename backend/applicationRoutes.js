

router.post("/apply", async (req, res) => {
  const { userId, jobId } = req.body;

  const application = new application({
    userId,
    jobId
  });

  await application.save();
  res.json({ message: "Applied Successfully" });
});