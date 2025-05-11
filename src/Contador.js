import './Contador.css';
import homem from './homem.png';
import mulher from './mulher.png';

function Quadro(){
    return (
        <div id='quadro'>
            <Total />
            <Cont1 caminhoImg={homem} txtAlt={'Ícone de um homem com uniforme corporativo'} rotulo={'Homens'} />
            <Cont1 caminhoImg={mulher} txtAlt={'Ícone de uma mulher com uniforme corporativo'} rotulo={'Mulheres'} />
        </div>
    );
}

function Total(){
    return (
        <>
        <div id='parte-total'>
            <h2 id='total'>Total</h2>
            <Contagem />
        </div>
        </>
    );
}

function Cont1({ caminhoImg, txtAlt, rotulo }){ // Parte que contém a imagem, os botões, o rótulo e o contador
    return (
        <div id='parte-pessoa'>
            <img className='figura' src={caminhoImg} alt={txtAlt}></img>
            <div id='botoes'>
                <Soma />
                <Subtrair />
            </div>
            <p id='rotulo-pessoa'>{rotulo}</p>
            <Contagem />
        </div>
    );
}

function Soma(){
    return (
        <button id='soma'>
            +
        </button>
    )
}

function Subtrair(){
    return (
        <button id='subtrair'>
            -
        </button>
    )
}

function Contagem(){
    return (
        <div className="contador">
            0
        </div>
    );
}

export default function Contador() {
    return (
        <>
        <Quadro />
        </>
    );
}