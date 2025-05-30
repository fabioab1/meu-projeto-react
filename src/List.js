import { useState } from "react";
import Voltar from "./Voltar";

let nextId = 0;

export default function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);
    
    return (
        <>
            <h1>Inspirando escultores:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setArtists(
                    [
                        ...artists,
                        { id: nextId++, name: name }
                    ]
                );
            }}>Adicionar</button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>

            <Voltar caminho={"/atv04"}/>
        </>
    );
}