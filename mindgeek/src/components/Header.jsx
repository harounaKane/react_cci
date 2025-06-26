import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import "./style.css";

export default function Header(){
    return(
        <>
            <header>
                <nav className="d-flex justify-content-around align-items-center p-3">
                    <Link to="/"> <img src={logo} alt="" /> </Link>
                    <Link to="/mutualise"> <i className="fa fa-users"></i> Serveur mutualisé </ Link>
                    <Link to="/dedie"><i className="fa fa-user"></i>  Serveur dédié </Link>
                    <Link to="/cloud"><i className="fa fa-cloud"></i>  Solution "Cloud" </Link>
                    <Link to="/contact"><i className="fa fa-envelope"></i>  Contact </Link>
                </nav>
                <input type="text" placeholder="Que cherchez-vous ?" className="w-100" />
            </header>
        </>
    )
}
