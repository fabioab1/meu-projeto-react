import Letreiro from "./Letreiro";
import Relogio from "./Relogio";
import { Link } from "react-router-dom";
import './Atv01.css';
import { useState } from "react";

let teste = "Título 2"
let num = true;

const products = [
  { title: 'Teclado', id: 1 },
  { title: 'Mouse', id: 2 },
  { title: 'Microfone', id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

function Botao({ count, onClick}) {
  
  return (
    <button onClick={onClick}>
      Me clicaram {count} vez(es)
    </button>
  );
}

function BotaoD() {
  return (
    <button>
      Botão 2
    </button>
  );
}


export default function Atv01() {
    const [count, setCount] = useState(0);

    function cliqueMouse() {
      setCount(count + 1);
    }
    
    return (
        <>
        <h2 className="teste">{teste}</h2>
        <p>{'A string do título é: ' + teste}</p>
        
        {num ? (
          <Botao count={count} onClick={cliqueMouse}/> 
        ) : (
          <BotaoD />
        )}

        <Botao count={count} onClick={cliqueMouse}/>

        <ul>{listItems}</ul>

        <Relogio />

        <Link to="/">Voltar</Link>
    </>
  );
}