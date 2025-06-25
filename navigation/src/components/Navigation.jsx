import { Link } from "react-router-dom";


export default function Navigation(){
    return(
        <nav>
            <Link to="/" style={{ marginRight: "10px" }}>Accueil</Link>
            <Link to="/client" style={{ marginRight: "10px" }}>Clients</Link>
            <Link to="/langage" style={{ marginRight: "10px" }}>Langages</Link>
        </nav>
    );
}