function Item({ name, isPacked }) {
    // Versão com uma instrução if e uma variável
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " ✔"}
            </del>
        )
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );

    // Versão com o operador lógico AND (&&)
    // return (
    //     <li className="item">
    //         {name} {isPacked && '✔'}
    //     </li>
    // );
    
    // Versão com riscos
    // return (
    //     <li className="item">
    //         {isPacked ? (
    //             <del>
    //                 {name + ' ✔'}
    //             </del>
    //         ) : (
    //             name
    //         )}
    //     </li>
    // );

    // Versão mais enxuta
    // return (
    //     <li className="item">
    //         {isPacked ? name + ' ✔' : name}
    //     </li>
    // );

    // Versão verbosa
    // if (isPacked) { 
    //    {/*return null;*/} 
    //    return <li className="item">{name} ✔</li>; 
    // }
    // return <li className="item">{name}</li>;
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item 
                    isPacked={true}
                    name="Space suit"
                />
                <Item 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item 
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}