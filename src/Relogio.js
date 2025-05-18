import { useState } from "react";
import { useEffect } from "react";
import "./Relogio.css";

export default function Relogio() {

  const [dataAtual, setDataAtual] = useState(new Date());

  useEffect(() => {
    const espera = setTimeout(() => {
      setDataAtual(new Date());
    }, 1000);

    return () => clearTimeout(espera);
  }, [dataAtual]);

  const horaFormatada = dataAtual.toLocaleTimeString('pt-BR');

  return (
    <>
      <p>{horaFormatada}</p>
    </>
  );
}