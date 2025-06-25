import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import langages from '../data/langages.json' ;

export default function DetailLangage(){

    const { id } = useParams();
    const langage = langages.find( l => l.id == id );

   if( !langage ){
    return <p>langage introuvable avec cet id :  {id} </p>
   }

    return(
        <>
            <h2>Bienvenue sur la page langages informatique id :  {id} </h2>

            <div>
                <h3> {langage.nom} </h3>
                <div> {langage.description}. Créé en {langage.annee} </div>
            </div>
            
        </>
    )
}