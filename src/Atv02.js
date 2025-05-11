import { Link } from "react-router-dom";
import Contador from "./Contador";

export default function Atv02() {
    return (
      <>
          <h2>Semana 2</h2>

          <Contador />

          <Link to="/">Voltar</Link>
      </>
    );
  }