import burguerRouter from "./routes/burguer-router.js";
import express from "express";
import cors from "cors";



const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use("/burguers", burguerRouter);

export default app;
