import { useState } from "react";
import Voltar from "./Voltar";

function Contador1() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>Contador +1</h1>
            <h2>{number}</h2>
            <button onClick={() => {
                setNumber(number + 1);
            }}>+1</button>
        </>
    );
}

function Contador3() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>Contador +3</h1>
            <h2>{number}</h2>
            <button onClick={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
            }}>+3</button>
        </>
    );
}

function Contador6() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>Contador +6</h1>
            <h2>{number}</h2>
            <button onClick={() => {
                setNumber(number + 5);
                setNumber(n => n + 1);
            }}>Incrementar o número</button>
        </>
    );
}

export default function Counter() {

    return (
        <>
            <Contador1 />

            <Contador3 />

            <Contador6 />

            <div>
                <Voltar caminho={"/atv04"}/>
            </div>
        </>
    )
}