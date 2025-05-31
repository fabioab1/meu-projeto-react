import { useState } from "react";
import Voltar from "./Voltar";

let nextId = 3;
const initialRappers = [
    { id: 0, name: 'Emicida' },
    { id: 1, name: 'Fabio Brazza' },
    { id: 2, name: 'MC Sid' },
];

export default function List3() {
    const [name, setName] = useState('');
    const [rappers, setRappers] = useState(
        initialRappers
    );

    function handleClick() {
        const insertAt = 1;
        const nextRappers = [
            ...rappers.slice(0, insertAt),
            { id: nextId++, name: name },
            ...rappers.slice(insertAt)
        ];
        setRappers(nextRappers);
        setName('');
    }

    return (
        <>
            <h1>Inspirando a arte:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClick}>
                Gravar
            </button>
            <ul>
                {rappers.map(rapper => (
                    <li key={rapper.id}>{rapper.name}</li>
                ))}
            </ul>
            
            <Voltar caminho={"/atv04"}/>
        </>
    );
}