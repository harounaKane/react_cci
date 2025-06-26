import { useParams } from "react-router-dom";
import articles from "../../data/articles.json";


export default function Detail(){
    const { id } = useParams();
    const article = articles.find( art => art.id == id);    
    
    if( !article ) 
        return "pas d'article avec cet id "; 
    
    return(
        <>
            <img src="https://placehold.co/400" alt="" className="w-25"/>
            <div> <strong>{article.libelle} </strong></div>
            <div>
                Prix: {article.prix}€. Il reste {article.stock} article(s) en stock.
            </div>
        </>
    )
}