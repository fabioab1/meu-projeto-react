import Voltar from "./Voltar";
import { Link } from "react-router-dom";

export default function Atv05() {
    return (
        <>

            <h2>Componentes do tutorial</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/atv05/form-quiz">FormQuiz</Link>
                    </li>
                    <li>
                        <Link to="/atv05/form-ticket">FormTicket</Link>
                    </li>
                    <li>
                        <Link to="/atv05/lab-eng-soft">Accordion</Link>
                    </li>
                </ul>
            </nav>

            <Voltar caminho={"/"} />
        </>
    );
}