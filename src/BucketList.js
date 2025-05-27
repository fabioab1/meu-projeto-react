import { useState } from "react";
import { Link } from "react-router-dom";

let nextId = 3;
const initialList = [
    { id: 0, title: 'React', seen: true},
    { id: 1, title: 'Angular', seen: false},
    { id: 2, title: 'Vue.js', seen: true},
    { id: 3, title: 'Electron', seen: false}
];

export default function BucketList() {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(
        initialList
    );

    function handleToggleMyList(frameworkId, nextSeen) {
        setMyList(myList.map(framework => {
            if (framework.id === frameworkId) {
                return { ...framework, seen: nextSeen };
            } else {
                return framework;
            }
        }));
    }

    function handleToggleYourList(frameworkId, nextSeen) {
        setYourList(yourList.map(framework => {
            if (framework.id === frameworkId) {
                return { ...framework, seen: nextSeen };
            } else {
                return framework;
            }
        }));
    }

    return (
        <>
            <h1>Lista de frameworks</h1>
            <h2>Minha lista de frameworks para ver:</h2>
            <ItemList
                frameworks={myList}
                onToggle={handleToggleMyList} />
            <h2>Sua lista de frameworks para ver:</h2>
            <ItemList
                frameworks={yourList}
                onToggle={handleToggleYourList} />
            
            <Link to="/Atv04">Voltar</Link>
        </>
    );
}

function ItemList({ frameworks, onToggle }) {
    return (
        <ul>
            {frameworks.map(framework => (
                <li key={framework.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={framework.seen}
                            onChange={e => {
                                onToggle(
                                    framework.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {framework.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}