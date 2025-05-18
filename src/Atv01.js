import Letreiro from "./Letreiro";
import Relogio from "./Relogio";
import { Link } from "react-router-dom";
import './Atv01.css';
import { useEffect } from "react";

export default function Atv01() {
  /*
  let nome = "Leo";

  useEffect(() => {
    const handleResize = () => {
      console.log("Mudou a largura da tela!");
    };
    window.addEventListener('resize', handleResize);

    // Limpeza
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  */

  return (
    <>
      <h2>Semana 1</h2>

      <Relogio />

      <Letreiro />

      <Link to="/">Voltar</Link>
    </>
  );

}