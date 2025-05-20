import { Link } from "react-router-dom";


// function Button() {
//     // function handleClick() {
//     //     alert('Você me clicou!');
//     // }

//     return (
//         <button onClick={() => {alert('Você é muito especial! ;)')}}>
//             Me clique
//         </button>
//     );
// }

// function AlertButton({ message, children }) {
//     return (
//         <button onClick={() => alert(message)}>
//             {children}
//         </button>
//     );
// }
    
function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function ReproduzirFilme({ filme }) {
    function handleClick() {
        alert(`Reproduzindo o filme "${filme}"...`);   
    }

    return (
        <Button onClick={handleClick}>
            Reproduzir Filme
        </Button>
    );
}

function CarregarImagem() {
    return (
        <Button onClick={() => {
            alert('Imagem carregada');
        }}>
            Carregar imagem
        </Button>
    );
}

export default function Toolbar() {
    return (
        <>

            <ReproduzirFilme filme="Como Treinar o seu Dragão - Live Action" />

            <CarregarImagem />

            {/* <AlertButton message="Você é muito bonito(a)! ;)" >
                Sentir-se melhor
            </AlertButton>

            <AlertButton message="Você é muito especial! ;)" >
                Sentir-se importante
            </AlertButton> */}

            {/* <Button /> */}

            <Link to="/">Voltar</Link>
        </>
    );
}