import { people } from "./data";
import { getImageUrl } from "./utils";

// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
// ];

// const people = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
// }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
// }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
// }, {
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',
// }, {
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
// }];

export default function List() {
    // const listItems = people.map(person => <li>{person}</li>);
    // return <ul>{listItems}</ul>;

    const chemists = people.filter(person => person.profession === 'chemist');

    const listItems = chemists.map(person =>
        <li key={person.id}>
            <img 
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;
}

