import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ results: "ok", message: "Welcome to Biskrem world" });
});

app.listen(5000, () => {
  console.log("biskrem is listening on port 5000");
});

export default app;
