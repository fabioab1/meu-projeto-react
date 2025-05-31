import { useState } from "react";
import "./FormQuiz.css";
import Voltar from "./Voltar";

export default function FormQuiz() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return (
            <>
                <h1>Está correto!</h1>

                <Voltar caminho={"/atv05"}/>
            </>
        );
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer (e.target.value);
    }

    return (
        <>
            <h2 className="titulo-quiz">Quiz de React</h2>
            <p className="pergunta">
                Em React, qual o nome do evento que, quando atribuído a um
                componente, observa se houve um clique do mouse?
            </p>
            <form className="quiz-react" onSubmit={handleSubmit}>
                <textarea 
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                    className="resposta-quiz"
                />
                <br />
                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                } className="enviar-resposta">
                    Responder
                </button>
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>

            <Voltar caminho={"/atv05"}/>
        </>
    );
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'onclick'
            if (shouldError) {
                reject(new Error('Tente novamente!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}