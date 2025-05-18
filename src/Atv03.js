import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import { Profile } from "./Gallery";
import Todos from "./Todos";
import Avatar from "./Avatar";
import Ex4 from "./Ex4";

export default function Atv03() {
    return (
        <>
            <h2>Semana 3</h2>

            <Gallery />

            <Profile />

            <Todos />

            <Avatar />

            <Ex4 />

            <Link to="/">Voltar</Link>
        </>
    );
}