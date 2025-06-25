import { Link } from 'react-router-dom';
import langages from '../data/langages.json' ;

export default function Langages(){

    return(
        <>
            <h2>Bienvenue sur la page langages informatique</h2>
            <ol>
                {
                    langages.map( (langage) => (
                        <li key={langage.id}> 
                            <Link to={`/langage/${langage.id}`}> {langage.nom} </Link>
                        </li>
                    ) )
                }
            </ol>
        </>
    )
}