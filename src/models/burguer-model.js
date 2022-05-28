import mongoose from "mongoose";

const { Schema, model } = mongoose;

const BurguerSchema = new Schema({
  nome: { type: String, required: true, unique: true },
  ingredientes: { type: String, required: true },
  foto: { type: String, required: true },
  preco: { type: Number, required: true },
  categoria: { type: String, required: true },
});

const Burguer = model("burguers", BurguerSchema);

export default Burguer;
