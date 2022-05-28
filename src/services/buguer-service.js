// import burguer from "../database/index.js";
import Burguer from '../models/burguer-model.js'

class BurguerServices {

  // Listar todos
  async listarTodos() {
    const burguerMongo = await Burguer.find();

    if (burguerMongo.length === 0) {
      throw { status: 404, message: "Nenhum produto encontrado" };
    }

    return burguerMongo;
  }

  // Listar por ID
  async listarPorId({ id }) {
    const burguerSelecionado = await Burguer.findById(id).exec();

    if (!burguerSelecionado) {
      throw { status: 404, message: "Nenhum produto encontrado" };
    }

    return burguerSelecionado;
  }

  // Criar nova Paleta
  async criarNovoBurguer({ nome, ingredientes, foto, preco, categoria }) {
    const novoBurguer = {
      nome,
      ingredientes,
      foto,
      preco,
      categoria,
    };

    try{
      const burguer = await Burguer.create(novoBurguer);

      return novoBurguer;
    }catch (error) {
      throw error;
    }
  }

  // atualizar 
  async refreshBurguer({ id, nome, ingredientes, foto, preco, categoria }) {
    const burguerRefresh = {
      nome,
      ingredientes,
      foto,
      preco,
      categoria,
    };

    try {
      await Burguer.updateOne({ _id: id }, burguerRefresh);

      const burguer = await Burguer.findById(id);

      return burguer;
    } catch (error) {
      throw error;
    }
    
  }
  async deleteBurguer({ id }) {
    const burguer = await Burguer.findByIdAndDelete(id);

    return burguer;
  }
}

export default BurguerServices;
