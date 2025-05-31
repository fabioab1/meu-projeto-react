import { Link } from "react-router-dom";
import "./Voltar.css";

export default function Voltar({ caminho }) {
    return (
        <Link className={"btn-voltar"} to={caminho}>Voltar</Link>
    );
}