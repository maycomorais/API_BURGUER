import burguer from "../database/index.js";
import Burguer from "../models/burguer-model.js";

class BurguerServices {
  async listarTodos() {
    const burguerMongo = await Burguer.find();

    if (burguerMongo.length === 0) {
      throw { status: 404, message: "Nenhum produto encontrado" };
    }

    return burguerMongo;
  }

  listarPorId({ id }) {
    const burguerSelecionado = burguer.find((elem) => elem.id === id);

    if (!burguerSelecionado) {
      throw { status: 404, message: "Nenhum produto encontrado" };
    }

    return burguerSelecionado;
  }

  criarNovoBurguer({ nome, ingredientes, foto, preco, categoria }) {
    const novoId =
      burguer.length === 0 ? 1 : burguer[burguer.length - 1].id + 1;

    if (!nome || !ingredientes || !foto || !preco || !categoria) {
      throw { status: 422, message: "Dados de Cadastros Incompletos" };
    }

    const novoBurguer = {
      id: novoId,
      nome,
      ingredientes,
      foto,
      preco,
      categoria,
    };

    burguer.push(novoBurguer);

    return novoBurguer;
  }
  refreshBurguer({ id, nome, ingredientes, foto, preco, categoria }) {
    if (!nome || !ingredientes || !foto || !preco || !categoria) {
      throw { status: 422, message: "Dados de Cadastros Incompletos" };
    }

    const burguerRefresh = {
      id,
      nome,
      ingredientes,
      foto,
      preco,
      categoria,
    };

    const indexBurguer = burguer.findIndex((elem) => elem.id === id);

    burguer[indexBurguer] = burguerRefresh;

    return burguerRefresh;
  }
  deleteBurguer({ id }) {
    const indexBurguer = burguer.findIndex((elem) => elem.id === id);

    burguer.splice(indexBurguer, 1);
  }
}

export default BurguerServices;
