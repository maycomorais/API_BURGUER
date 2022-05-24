import { Router } from "express";
import BurguerControllers from "../controllers/burguer-controllers.js";

const burguerRouter = Router();
const burguercontrollers = new BurguerControllers();

// listar todos
burguerRouter.get("/todos", burguercontrollers.listarTodos);

// listar por ID
burguerRouter.get("/burguer/:id", burguercontrollers.listarPorId);

// Criar novo
burguerRouter.post("/criar", burguercontrollers.criarNovoBurguer);

// Atualizar
burguerRouter.put("/refresh/:id", burguercontrollers.refreshBurguer);

// Deletar
burguerRouter.delete("/delete/:id", burguercontrollers.deleteBurguer);

export default burguerRouter;
