import { Link } from "react-router-dom";

function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <>
            <div className="Toolbar" onClick={() => {
                alert('Você clicou na barra de ferramentas!');
            }}>
                <Button onClick={() => alert('Reproduzindo...')}>
                    Reproduzir filme
                </Button>
                <Button onClick={() => alert('Carregando...')}>
                    Carregar imagem
                </Button>
            </div>
        
            <Link to="/Atv04">Voltar</Link>
        </>
    );
}