import app from "./app.js";
import { conectarDataBase } from './database/index.js'

const port = 3007;

app.listen(port, () => {
  conectarDataBase();
  console.log(`A aplicação está rodando na porta http://localhost:${port}`);
});
