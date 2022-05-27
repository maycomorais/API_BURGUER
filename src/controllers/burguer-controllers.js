import BurguerServices from "../services/buguer-service.js";

const burguerServices = new BurguerServices();

class BurguerControllers {
  async listarTodos(req, res) {
    try {
      const burguer = await burguerServices.listarTodos();

      res.send(burguer);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }
  listarPorId(req, res) {
    try {
      const id = +req.params.id;
      const burguer = burguerServices.listarPorId({ id });
      res.send(burguer);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }
  criarNovoBurguer(req, res) {
    const { nome, ingredientes, foto, preco, categoria } = req.body;

    try {
      const novoBurguer = burguerServices.criarNovoBurguer({
        nome,
        ingredientes,
        foto,
        preco,
        categoria,
      });

      res.status(201).send(novoBurguer);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }
  refreshBurguer(req, res) {
    const { nome, ingredientes, foto, preco, categoria } = req.body;

    const id = +req.params.id;

    try {
      const burguerRefresh = burguerServices.refreshBurguer({
        id,
        nome,
        ingredientes,
        foto,
        preco,
        categoria,
      });

      res.send(burguerRefresh);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }
  deleteBurguer(req, res) {
    const id = +req.params.id;

    burguerServices.deleteBurguer({ id });

    res.sendStatus(204);
  }
}

export default BurguerControllers;
