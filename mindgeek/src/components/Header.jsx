import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png'
import "./style.css";

export default function Header(){
    // recup le nom du l'url
    const location = useLocation();
    const banniereHome = location.pathname == "/";

    return(
        <>
            <header className="mb-3">
                <nav className="d-flex justify-content-around align-items-center p-3">
                    <Link to="/"> <h1><img src={logo} alt="" /></h1> </Link>
                    <Link to="/mutualise"> <i className="fa fa-users"></i> Serveur mutualisé </ Link>
                    <Link to="/dedie"><i className="fa fa-user"></i>  Serveur dédié </Link>
                    <Link to="/cloud"><i className="fa fa-cloud"></i>  Solution "Cloud" </Link>
                    <Link to="/contact"><i className="fa fa-envelope"></i>  Contact </Link>
                </nav>

                {banniereHome &&(
                        <div className="tagHome">
                        <h2>L'hébergement à prix libre</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolorem architecto sit eum ad? Impedit!
                    </p>
                </div>)
                }

                <input type="text" placeholder="Que cherchez-vous ?" className="w-100" />
            </header>
        </>
    )
}

