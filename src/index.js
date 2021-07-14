import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
CRUD (Create, Read (Single & All), Update, Delete)
Create -> Formulário de criação
Read All -> Listagem de itens cadastrados
Read Single -> Visualização de um item específico
Update -> Formulário de edição
Delete -> Remover um item específico
*/

// Read All
// Precisa dos dados que serão exibidos
// A estrutura desses dados precisa possuir 'Nome' e 'URL da Imagem'
// O meu será de Raças de Cachorro

const lista = [
  {
    id: 1,
    nome: "Golden Retriver",
    imagemUrl:
      "https://www.petlove.com.br/images/breeds/193223/profile/original/golden_retriever-p.jpg?1532539102",
  },
  {
    id: 2,
    nome: "Dachshund",
    imagemUrl:
      "https://t2.uc.ltmcdn.com/pt/images/6/0/4/como_cuidar_de_um_dachshund_19406_orig.jpg",
  },
];

function Item(props) {
  const indice = props.indice;
  const item = lista[indice];

  return (
    <div>
      {item.nome}
      <br />
      <img src={item.imagemUrl} alt={item.nome} width="200" />{" "}
    </div>
  );
}

function Lista() {
  return (
    <div>
      {lista.map((item, index) => (
        <Item indice={index} key={index} />
      ))}
    </div>
  );
}

function App() {
  return <Lista />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
