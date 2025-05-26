import { Link } from "react-router-dom";
import { useState } from "react";

let initialArtists = [
    { id: 0, name: 'Tarsila do Amaral'},
    { id: 1, name: 'Anita Malfatti'},
    { id: 2, name: 'Cândido Portinari'},
];

export default function List2() {
    const [artists, setArtists] = useState(
        initialArtists
    );

    return (
        <>
            <h1>Inspirando artistas:</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}{' '}
                        <button onClick={() => {
                            setArtists(
                                artists.filter(a =>
                                    a.id !== artist.id
                                )
                            );
                        }}>
                            Remover
                        </button>
                    </li>
                ))}
            </ul>

            <Link to="/Atv04">Voltar</Link>
        </>
    );
}