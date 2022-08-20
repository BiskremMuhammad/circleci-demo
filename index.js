import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ results: "ok", message: "Welcome to Biskrem world" });
});

app.listen(5555, () => {
  console.log("biskrem is listening on port 5555");
});
setTimeout(() => {
  app.close();
}, 500);

export default app;
