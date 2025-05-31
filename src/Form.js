import { useState } from "react";
import Voltar from "./Voltar";

export default function Form() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Olá!');

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`Você disse ${message} para ${to}`);
        }, 5000);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Para: {' '}
                    <select
                        value={to}
                        onChange={e => setTo(e.target.value)}>
                        <option value="Alice">Alice</option>
                        <option value="Bob">Bob</option>
                    </select>
                </label>
                <div>
                    <textarea
                        placeholder="Mensagem"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>

            <Voltar caminho={"/atv04"}/>
        </>
    );
}



