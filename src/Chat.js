import { useState } from "react";

export default function Chat({ contact }) {
    const [text, setText] = useState('');
    return (
        <section className="mensagem">
            <textarea
                value={text}
                placeholder={'Escrever para ' + contact.name}
                onChange={e => setText(e.target.value)}
            />
            <br />
            <button>Enviar para {contact.email}</button>
        </section>
    );
}