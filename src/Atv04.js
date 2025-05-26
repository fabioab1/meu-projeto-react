import { Link } from "react-router-dom";
import { sculptureList } from "./data";
import { useState, useEffect } from "react";
import MovingDot from "./MovingDot";
import Form2 from "./Form2";

// function Button() {
//     // function handleClick() {
//     //     alert('Você me clicou!');
//     // }

//     return (
//         <button onClick={() => {alert('Você é muito especial! ;)')}}>
//             Me clique
//         </button>
//     );
// }

// function AlertButton({ message, children }) {
//     return (
//         <button onClick={() => alert(message)}>
//             {children}
//         </button>
//     );
// }
    
// function Button({ onClick, children }) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }

// function ReproduzirFilme({ filme }) {
//     function handleClick() {
//         alert(`Reproduzindo o filme "${filme}"...`);   
//     }

//     return (
//         <Button onClick={handleClick}>
//             Reproduzir Filme {filme}
//         </Button>
//     );
// }

// function CarregarImagem() {
//     return (
//         <Button onClick={() => {
//             alert('Imagem carregada');
//         }}>
//             Carregar imagem
//         </Button>
//     );
// }

// function Button({ onSmash, children }){
//     return (
//         <button onClick={onSmash}>
//             {children}
//         </button>
//     );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//     return (
//         <>
//             <Button onClick={onPlayMovie}>
//                 Reproduzir Filme
//             </Button>

//             <Button onClick={onUploadImage}>
//                 Carregar imagem
//             </Button>
//         </>
//     );
// }

// function Button({ onClick, children }){
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }

// function Toolbar() {
//     return (
//         <div className="Toolbar" onClick={() => {
//             alert('Você clicou na barra de ferramentas!');
//         }}>
//             <Button onClick={() => alert('Reproduzindo!')}>
//                 Reproduzir filme
//             </Button>
//             <Button onClick={() => alert('Carregando imagem!')}>
//                 Carregar imagem
//             </Button>
//         </div>
//     );
// }

// function Button({ onClick, children }) {
//     return (
//         <button onClick={e => {
//             e.stopPropagation();
//             onClick();
//         }}>
//             {children}
//         </button>
//     );
// }

// function Signup() {
//     return (
//         <form onSubmit={e => {
//             e.preventDefault();
//             alert('Enviando...');
//         }}>
//             <input />
//             <button>Enviar</button>
//         </form>
//     );
// }

// function Gallery() {

//     const [index, setIndex] = useState(0);
//     const [showMore, setShowMore] = useState(false);

//     function handleClick() {
//         setIndex(index + 1);
//     }

//     function handleMoreClick() {
//         setShowMore(!showMore);
//     }

//     let sculpture = sculptureList[index];
//     return (
//         <>
//             <button onClick={handleClick}>
//                 Next
//             </button>
//             <h2>
//                 <i>{sculpture.name} </i>
//                 by {sculpture.artist}
//             </h2>
//             <h3>
//                 ({index + 1} of {sculptureList.length})
//             </h3>
//             <button onClick={handleMoreClick}>
//                 {showMore ? 'Ocultar' : 'Mostrar'} detalhes 
//             </button>
//             {showMore && <p>{sculpture.description}</p>}
//             <img 
//                 src={sculpture.url}
//                 alt={sculpture.alt}
//             />
//         </>
//     );
// }

// function Gallery() {
//     return (
//         <section>
//             <h1>Inspirando esculturas e obras</h1>
//             <Image />      
//             <Image />      
//             <Image />      
//         </section>
//     );
// }

// function Image() {
//     return (
//         <img
//             src="https://img.freepik.com/fotos-premium/cabeca-de-riso-estatuas-de-bronze-escultura-de-cabeca-engracada_61573-704.jpg"
//             alt="Estátua dando risada"
//         />
//     );
// }

/* ---- Relógio

function Clock({ time }) {
    return (
        <>
            <h1>{time}</h1>
            <input />
        </>
    );
}

function useTime() {
    const [time, setTime] = useState(() => {new Date()});
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

----------------- */

// function Form() {
//     const [isSent, setIsSent] = useState(false);
//     const [message, setMessage] = useState('Hi!');

//     if (isSent) {
//         return <h1>Sua mensagem está a caminho!</h1>
//     }
//     return (
//         <form onSubmit={(e) => {
//             e.preventDefault();
//             setIsSent(true);
//             sendMessage(message);
//         }}>
//             <textarea 
//                 placeholder="Mensagem"
//                 value={message}
//                 onChange={e => setMessage(e.target.value)}
//             />
//             <button type="submit">Enviar</button>
//         </form>
//     );
// }

// function sendMessage(message) {
//     alert({message});
// }

// function Counter() {
//     const [number, setNumber] = useState(0);

//     return (
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(n => n + 1);
//                 setNumber(n => n + 1);
//                 setNumber(n => n + 1);
//             }}>+3</button>
//         </>
//     )
// }

export default function App() {
    // const time = useTime();

    return (
        <>

            <h2>Componentes do tutorial</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/toolbar">Toolbar</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                        <Link to="/form">Form</Link>
                    </li>
                    <li>
                       <Link to="/moving-dot">MovingDot</Link> 
                    </li>
                    <li>
                        <Link to="/form2">Form2</Link>
                    </li>
                    <li>
                        <Link to="/form3">Form3</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                    <li>
                        <Link to="/list2">List 2</Link>
                    </li>
                    <li>
                        <Link to="/shape-editor">ShapeEditor</Link>
                    </li>
                    <li>
                        <Link to="/counter-list">CounterList</Link>
                    </li>
                    <li>
                        <Link to="/list3">List3</Link>
                    </li>
                    <li>
                        <Link to="/list4">List4</Link>
                    </li>
                    <li>
                        <Link to="/bucket-list">BucketList</Link>
                    </li>
                </ul>
            </nav>

            {/* <Counter /> */}

            {/* <Form /> */}

            {/* <Clock time={time.toLocaleTimeString('pt-BR')} /> */}

            {/* <Gallery />
            <Gallery /> */}

            {/* <Signup /> */}

            {/* <Toolbar /> */}

            {/* <Toolbar
                onPlayMovie={() => alert('Reproduzindo...!')}
                onUploadImage={() => alert('Carregando a imagem...!')}
            /> */}

            {/* <Button onSmash={() => {
                alert('Reproduzindo o filme...');
            }}>
                Reproduzir Filme
            </Button>
            
            <Button onSmash={function() {
                alert('Imagem carregada');
            }}>
                Carregar imagem
            </Button> */}

            {/* <ReproduzirFilme filme="Como Treinar o seu Dragão - Live Action" />

            <CarregarImagem /> */}

            {/* <AlertButton message="Você é muito bonito(a)! ;)" >
                Sentir-se melhor
            </AlertButton>

            <AlertButton message="Você é muito especial! ;)" >
                Sentir-se importante
            </AlertButton> */}

            {/* <Button /> */}

            <Link to="/">Voltar</Link>
        </>
    );
}