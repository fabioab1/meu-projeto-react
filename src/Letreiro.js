import { useState } from "react";
import { useEffect } from "react";
import "./Letreiro.css";

export default function Letreiro() {

  const texto = "Conheça a Fatec";

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [textoAtual, setTextoAtual] = useState("");
  const [modoEscrita, setModoEscrita] = useState(true);

  useEffect(() => {
    const espera = setTimeout(() => {
      if (modoEscrita) {
        if (indiceAtual < texto.length) {
          setTextoAtual(textoAtual + texto[indiceAtual]);
          setIndiceAtual(indiceAtual + 1);
        }
        else {
          setModoEscrita(false);
        }
      }
      else {
        if (indiceAtual > 0) {
          setTextoAtual(textoAtual.substring(0, indiceAtual - 1));
          setIndiceAtual(indiceAtual - 1);
        }
        else {
          setModoEscrita(true);
        }
      }

      return () => clearTimeout(espera);
    }, 250);
  }, [indiceAtual, textoAtual, modoEscrita]);

  return (
    <div>
      <h1>{textoAtual}</h1>
    </div>
  );
}