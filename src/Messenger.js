import { useState } from "react";
import Chat from "./Chat.js";
import ContactList from "./ContactList.js";
import "./Messenger.css";
import Voltar from "./Voltar.js";

export default function Messenger() {
    const [to, setTo] = useState(contacts[0]);
    return (
        <>
            <div className="painel-msg">
                <ContactList
                    contacts={contacts}
                    selectedContact={to}
                    onSelect={contact => setTo(contact)}
                />
                <Chat key={to.email} contact={to} />
            </div>
        
            <Voltar caminho={"/atv05"}/>
        </>
    );
}

const contacts = [
    { name: 'Fábio', email: 'fabio.abreu3@fatec.sp.gov.br' },
    { name: 'Fernando', email: 'fernando.henrique99@fatec.sp.gov.br' },
    { name: 'Gabriela', email: 'gabriela.afonso12@fatec.sp.gov.br' }
];