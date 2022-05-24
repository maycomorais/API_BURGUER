import express from "express";
import cors from "cors";
import burguerRouter from "./routes/burguer-router.js";

const port = 3007;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use("/burguers", burguerRouter);

app.listen(port, () => {
  console.log(`A aplicação está rodando na porta http://localhost:${port}`);
});
