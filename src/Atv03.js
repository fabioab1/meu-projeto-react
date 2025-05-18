import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import { Profile } from "./Gallery";
import Todos from "./Todos";

export default function Atv03() {
    return (
        <>
            <h2>Semana 3</h2>

            <Gallery />

            <Profile />

            <Todos />

            <Link to="/">Voltar</Link>
        </>
    );
}