import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="bg-light p-3 mb-3">
            <h1 className="text-center">Gestion</h1>
            <nav>
                <Link to="/"  className="btn btn-secondary">Accueil</Link>
            </nav>
        </header>
    )
}