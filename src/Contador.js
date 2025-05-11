import { useState } from 'react';
import './Contador.css';
import homem from './homem.png';
import mulher from './mulher.png';

function Quadro(){
    const [countTotal, setCount] = useState(0);
    const [countH, setCountH] = useState(0);
    const [countM, setCountM] = useState(0);

    function cliqueMouseHAdd() {
        setCountH(countH + 1);
        setCount(countTotal + 1);
    }

    function cliqueMouseMAdd() {
        setCountM(countM + 1);
        setCount(countTotal + 1);
    }
    
    function cliqueMouseHSub() {
        setCountH(countH - 1);
        setCount(countTotal - 1);
    }
    
    function cliqueMouseMSub() {
        setCountM(countM - 1);
        setCount(countTotal - 1);
    }

    return (
        <div id='quadro'>
            <Total count={countTotal} />
            <div id='cont-pessoas'>
                <Cont1 caminhoImg={homem} txtAlt={'Ícone de um homem com uniforme corporativo'} rotulo={'Homens'} count={countH} onClickAdd={cliqueMouseHAdd} onClickSub={cliqueMouseHSub}/>
                <Cont1 caminhoImg={mulher} txtAlt={'Ícone de uma mulher com uniforme corporativo'} rotulo={'Mulheres'} count={countM} onClickAdd={cliqueMouseMAdd} />
            </div>
        </div>
    );
}

function Total({ count }){
    return (
        <>
        <div id='parte-total'>
            <h2 id='total'>Total</h2>
            <Contagem count={count} />
        </div>
        </>
    );
}

function Cont1({ caminhoImg, txtAlt, rotulo, count, onClick }){ // Parte que contém a imagem, os botões, o rótulo e o contador
    return (
        <div id='parte-pessoa'>
            <img className='figura' src={caminhoImg} alt={txtAlt}></img>
            <div id='botoes'>
                <Soma onClick={onClick} />
                <Subtrair onClick={onClick} />
            </div>
            <p id='rotulo-pessoa'>{rotulo}</p>
            <Contagem count={count} />
        </div>
    );
}

function Soma({ onClick }){
    return (
        <button id='soma' onClick={onClick}>
            +
        </button>
    )
}

function Subtrair({ onClick }){
    return (
        <button id='subtrair' onClick={onClick}>
            -
        </button>
    )
}

function Contagem({ count }){
    return (
        <div className="contador">
            {count}
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