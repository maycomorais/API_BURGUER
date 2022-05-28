import BurguerServices from "../services/buguer-service.js";

const burguerServices = new BurguerServices();

class BurguerControllers {

  // LISTAR TODAS AS PALETAS
  async listarTodos(req, res) {
    try {
      const burguers = await burguerServices.listarTodos();

      res.send(burguers);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  // Listar por ID
  async listarPorId(req, res) {
    try {
      const id = req.params.id;
      const burguer = await burguerServices.listarPorId({ id });
      res.send(burguer);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  // CRIAR NOVA PALETA
  async criarNovoBurguer(req, res) {
    const { nome, ingredientes, foto, preco, categoria } = req.body;

    try {
      const novoBurguer = await burguerServices.criarNovoBurguer({
        nome,
        ingredientes,
        foto,
        preco,
        categoria,
      });

      res.status(201).send(novoBurguer);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Item já cadastrado');
      }
    }
  };

  async refreshBurguer(req, res) {
    const { nome, ingredientes, foto, preco, categoria } = req.body;

    const id = req.params.id;

    try {
      const burguerRefresh = await burguerServices.refreshBurguer({
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
    const id = req.params.id;

    const burguer = burguerServices.deleteBurguer({ id });

    res.status(200).send(burguer);
  }
}

export default BurguerControllers;
