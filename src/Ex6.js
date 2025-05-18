import { getImageUrl } from './utils.js';

function Avatar({ person, size = 100, isSepia, thickBorder }) {
    // Substitir a escrita da função acima para 'function Avatar(props)'
    // para utilizar as variáveis abaixo:
    // let person = props.person;
    // let size = props.size;
    
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Profile(props) {
    return (
        <>
            <div className="card">
                <Avatar 
                    person={props.person}
                    size={props.size}
                    isSepia={props.isSepia}
                    thickBorder={props.thickBorder}
                />
            </div>

            <div>
                <Avatar
                    person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
                    // size={100}
                />
                <Avatar 
                    person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
                    // size={100}
                />
            </div>
        </>
    );
}