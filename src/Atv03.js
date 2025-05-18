import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import { Profile } from "./Gallery";
import Todos from "./Todos";
import Avatar from "./Avatar";
import Ex4 from "./Ex4";
import Ex5 from "./Ex5";
import Ex6 from "./Ex6";
import Ex7 from "./Ex7";
import PackingList from "./PackingList";

export default function Atv03() {
    return (
        <>
            <h2>Semana 3</h2>

            <Gallery />

            <Profile />

            <Todos />

            {/* <Avatar /> */}

            <Ex4 />

            <Ex5 />

            <Ex6 person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100} isSepia={"isSepia"} thickBorder={"thickBorder"} />

            <Ex7 />

            <PackingList />

            <Link to="/">Voltar</Link>
        </>
    );
}