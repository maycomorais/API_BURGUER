import mongoose from "mongoose";

const {connect} = mongoose;

export const conectarDataBase = () => {
  connect("mongodb://localhost:27017/burguers_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("MongoDB conectado");
    })
    .catch((err) => {
      console.log(`Erro na conexão com MongoDB: ${err}`);
    });
};

// const burguer = [
//   {
//     id: 1,
//     nome: "Brie Burguer",
//     ingredientes:
//       "Pão da Casa, Maionese Verde, Hambúrguer, Queijo Muçarela, Queijo Brie, Geleia de Pimenta e Rúcula.",
//     foto: "./assets/img/brie-burguer.jpg",
//     preco: 20.0,
//     categoria: "lanche",
//   },
//   {
//     id: 2,
//     nome: "Carne e Queijo",
//     ingredientes:
//       "Pão e Maionese da Casa, Hambúrguer e Queijo Muçarela derretido.",
//     foto: "./assets/img/carne-e-queijo.jpg",
//     preco: 18.0,
//     categoria: "lanche",
//   },
//   {
//     id: 3,
//     nome: "Catupiry com Bacon",
//     ingredientes:
//       "Pão da Casa, Molho de Tomate, Hambúrguer, Catupiry e Bacon crocante.",
//     foto: "./assets/img/catupiry-com-bacon.jpg",
//     preco: 22.0,
//     categoria: "lanche",
//   },
//   {
//     id: 4,
//     nome: "Cheddar",
//     ingredientes:
//       "Pão Australiano, Maionese da Casa, Hambúrguer, Cheddar, Cebola caramelizada e Bacon crocante.",
//     foto: "./assets/img/cheddar.jpg",
//     preco: 20.0,
//     categoria: "lanche",
//   },
//   {
//     id: 5,
//     nome: "Cheeseburger",
//     ingredientes:
//       "Pão e Maionese da Casa, Hambúrguer prensado e Queijo Cheddar derretido.",
//     foto: "./assets/img/cheeseburger.jpg",
//     preco: 18.0,
//     categoria: "lanche",
//   },
//   {
//     id: 6,
//     nome: "Costela",
//     ingredientes:
//       "Pão da Casa, Molho de Tomate, Hambúrguer, Catupiry e Bacon crocante.",
//     foto: "./assets/img/costela.jpg",
//     preco: 25.0,
//     categoria: "lanche",
//   },
//   {
//     id: 7,
//     nome: "Duplo Bacon",
//     ingredientes:
//       "Pão da Casa, Molho de Queijo, dois Hambúrgueres, Queijo Prato, Ketchup e Bacon em tiras.",
//     foto: "./assets/img/duplo-bacon.jpg",
//     preco: 25.0,
//     categoria: "lanche",
//   },
//   {
//     id: 8,
//     nome: "Fraldinha na Mostarda",
//     ingredientes:
//       "Pão e Maionese da Casa, Hambúrguer de Fraldinha, Queijo Muçarela, Molho de Mostarda e Rúcula.",
//     foto: "./assets/img/fraldinha-na-mostarda.jpg",
//     preco: 28.0,
//     categoria: "lanche",
//   },
//   {
//     id: 9,
//     nome: "Quatro Queijos",
//     ingredientes:
//       "Pão da Casa, Molho de Tomate, Hambúrguer coberto com os queijos Muçarela, Provolone, Catupiry e Gorgonzola.",
//     foto: "./assets/img/quatro-queijos.jpg",
//     preco: 25.0,
//     categoria: "lanche",
//   },
//   {
//     id: 10,
//     nome: "Queijo Coalho",
//     ingredientes:
//       "Pão e Maionese da Casa, Hambúrguer, Muçarela, Queijo Coalho, Maionese de Mel e Rúcula.",
//     foto: "./assets/img/queijo-coalho.jpg",
//     preco: 25.0,
//     categoria: "lanche",
//   },
//   {
//     id: 11,
//     nome: "Salmão",
//     ingredientes:
//       "Pão da Casa, Maionese de Ervas Finas, Hambúrguer de Salmão, Molho Tarê, Cream Cheese e Cebolinha.",
//     foto: "./assets/img/salmao.jpg",
//     preco: 30.0,
//     categoria: "lanche",
//   },
//   {
//     id: 12,
//     nome: "Água com e sem gás",
//     ingredientes: "Com gás ou sem gás? Refresque-se com sua água favorita.",
//     foto: "./assets/img/agua-com-e-sem-gas.jpg",
//     preco: 2.5,
//     categoria: "bebida",
//   },
//   {
//     id: 13,
//     nome: "Chopp Heineken ou Amstel",
//     ingredientes: "O Chopp já está gelado e te esperando pra mais tarde.",
//     foto: "./assets/img/chopp-amstel-ou-heineken.jpg",
//     preco: 10.0,
//     categoria: "bebida",
//   },
//   {
//     id: 14,
//     nome: "Heineken e Sol Long Neck",
//     ingredientes:
//       "Heineken e Sol Long Neck estupidamente gelada, acompanhamento perfeito para sua porção.",
//     foto: "./assets/img/heineken-e-sol-long-neck.jpg",
//     preco: 12.0,
//     categoria: "bebida",
//   },
//   {
//     id: 15,
//     nome: "Refrigerantes",
//     ingredientes:
//       "Naquelas horas que bate uma vontade de beber um refrigerante geladinho, não adianta tentar: é impossível resistir!",
//     preco: 5.0,
//     foto: "./assets/img/refrigerantes.jpg",
//     categoria: "bebida",
//   },
//   {
//     id: 16,
//     nome: "Sucos Del Valle e integral",
//     ingredientes: `Sucos Del Valle e Prat's refrescante em qualquer hora.`,
//     foto: "./assets/img/cheeseburger.jpg",
//     preco: 5.0,
//     categoria: "bebida",
//   },
//   {
//     id: 17,
//     nome: "Anéis de cebola",
//     ingredientes:
//       "Cortadas em forma de anéis, empanadas com uma leve camada de farinha de rosca já temperada. Acompanha Maionese de Pimenta.",
//     foto: "./assets/img/aneis-de-cebola.jpg",
//     preco: 10.0,
//     categoria: "porção",
//   },
//   {
//     id: 18,
//     nome: "Batata Rústica",
//     ingredientes:
//       "Acompanhamento perfeito, traz um sabor único além de ser muito gostosa e cremosa por dentro. Acompanha Maionese da Casa.",
//     foto: "./assets/img/batata-rustica.jpg",
//     preco: 12.0,
//     categoria: "porção",
//   },
//   {
//     id: 19,
//     nome: "Fritas com Molho de Queijo e Bacon",
//     ingredientes:
//       "Aquela batatinha irresistível que você já conhece, coberta com molho de queijo cremoso e pedacinhos de bacon.",
//     foto: "./assets/img/fritas-com-molho-de-queijo-e-bacon.jpg",
//     preco: 12.0,
//     categoria: "porção",
//   },
//   {
//     id: 20,
//     nome: "Palitos de Muçarela",
//     ingredientes:
//       "Aqueles Palitos de Muçarela crocantes, temperados e deliciosos que você respeita! Acompanha Maionese de Pimenta.",
//     foto: "./assets/img/palitos-de-mucarela.jpg",
//     preco: 15.0,
//     categoria: "porção",
//   },
//   {
//     id: 21,
//     nome: "Brownie com Sorvete",
//     ingredientes:
//       "Combinação generosíssima de brownie de Doce de Leite ou Nutella, com sorvete de creme e calda de chocolate.",
//     foto: "./assets/img/brownie-com-sorvete.jpg",
//     preco: 12.0,
//     categoria: "sobremesa",
//   },
//   {
//     id: 22,
//     nome: "Milk Shakes",
//     ingredientes:
//       "Nossos Milk Shakes fazem qualquer um ficar apaixonado! Temos de Doce de Leite com Nozes, Ovomaltine, Morango e Nuttela!",
//     foto: "./assets/img/milk-shakes.jpg",
//     preco: 15.0,
//     categoria: "sobremesa",
//   },
// ];

// export default burguer;
