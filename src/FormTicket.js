import { useState } from "react";
import Voltar from "./Voltar";
import "./FormTicket.css"

export default function FormTicket() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <>
            <form className="form-ticket">
                <h2 className="titulo-ticket">Check-in</h2>
                <label className="label-ticket">
                    Primeiro nome: {' '}
                    <input
                        value={firstName}
                        onChange={handleFirstNameChange}
                        className="input-ticket"
                    />
                </label>
                <label className="label-ticket">
                    Último nome: {' '}
                    <input
                        value={lastName}
                        onChange={handleLastNameChange}
                        className="input-ticket"
                    />
                </label>
                <p className="resul-ticket">
                    O seu bilhete será emitido para: <b>{fullName}</b>
                </p>
            </form>

            <Voltar caminho={"/atv05"}/>
        </>
    );
}