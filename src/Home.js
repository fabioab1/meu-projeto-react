import React from "react";
import {Link} from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>Página inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/atv01">Semana 1</Link>
                    </li>
                    <li>
                        <Link to="/atv02">Semana 2</Link>
                    </li>
                    <li>
                        <Link to="/atv03">Semana 3</Link>
                    </li>
                    <li>
                        <Link to="/atv04">Semana 4</Link>
                    </li>
                    <li>
                        <Link to="/atv05">Semana 5</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;