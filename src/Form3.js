import { Link } from "react-router-dom";
import { useState } from "react";

export default function Form3() {
    const [person, setPerson] = useState({
        name: 'Federico Clapis',
        artwork: {
            title: 'Crypto Connection',
            city: 'Londres',
            image: 'https://www.contioutra.com/content/uploads/2020/11/1-1-46.jpg',
        }
    });

    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        });
    }

    function handleCityChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        });
    }

    function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        });
    }

    return (
        <>
            <label>
                Nome:
                <input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Título:
                <input
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <label>
                Cidade:
                <input
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <label>
                Imagem:
                <input
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' por '}
                {person.name}
                <br />
                (localizado em {person.artwork.city})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />

            <div>
                <Link to="/Atv04">Voltar</Link>
            </div>
        </>
    );
}