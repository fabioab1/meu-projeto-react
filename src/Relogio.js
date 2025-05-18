import { useState } from "react";
import "./Relogio.css";

export default function Relogio() {
  const [hora, setHora] = useState(0);

  function tempoPassou() {
    setHora(hora + 1);
  }

  

  let horaAt = 0;
  function tick() {
    horaAt++;
    tempoPassou();
  }

  setInterval(tick, 1000);

  return (
    <>
      <p>{hora}</p>
    </>
  );
}