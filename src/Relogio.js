import "./Relogio.css";

let hora = new Date().toLocaleTimeString('pt-BR');

export default function Relogio() {
    
    return (
      <>
      <p>{hora}</p>
      </>
    );
}