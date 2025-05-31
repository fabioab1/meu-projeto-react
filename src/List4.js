import { useState } from "react";
import Voltar from "./Voltar";

let nextId = 3;
const initialList = [
    { id: 0, title: 'React' },
    { id: 1, title: 'Angular' },
    { id: 2, title: 'Vue.js' },
    { id: 3, title: 'Electron' }
];

export default function List4() {
    const [list, setList] = useState(initialList);

    function handleClick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }

    return (
        <>
            <button onClick={handleClick}>
                Reverter
            </button>
            <ul>
                {list.map(framework => (
                    <li key={framework.id}>{framework.title}</li>
                ))}
            </ul>
            
            <Voltar caminho={"/atv04"}/>
        </>
    );
}