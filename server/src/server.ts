import express, { type Request, type Response } from "express";

const app = express();
const PORT = 5000;

app.get("/", (req: Request, res: Response) => {
  res.json({ success: true, message: "Api Working !" });
});

app.get("/home", (req: Request, res: Response) => {
  res.json({ success: true, message: "Home page" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
