import { Link } from "react-router-dom";
import { sculptureList } from "./data";
import { useState } from "react";

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        if (index < sculptureList.length - 1)
            setIndex(index + 1);
        else
            setIndex(0);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Próximo
            </button>
            <h2>
                <i>{sculpture.name}</i>
                por {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} de {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <div>
                <button onClick={handleMoreClick}>
                    {showMore ? 'Esconder' : 'Mostrar'} detalhes
                </button>
                {showMore && <p>{sculpture.description}</p>}
            </div>

            <div>
                
            </div>
        </>
    );
}
