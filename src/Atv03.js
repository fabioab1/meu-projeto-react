import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import { Profile } from "./Gallery";

export default function Atv03() {
    return (
        <>
            <h2>Semana 3</h2>

            <Gallery />

            <Profile />

            <Link to="/">Voltar</Link>
        </>
    );
}