import { Link } from "react-router-dom";
import articles from "../../data/articles.json";

export default function Article(){
    return(
        <>
            <h2 className="text-center">Liste des articles</h2>

            <table className="table table-striped">
                <thead>
                    <tr className="table-dark">
                        <th>Libellé</th>
                        <th>Prix</th>
                        <th>Voir</th>
                    </tr>
                </thead>

                {
                    articles.map( article => (
                        <tbody key={article.id}>
                            <tr>
                                <td> {article.libelle} </td>
                                <td> {article.prix} </td>
                                <td>
                                    <Link to={`/article/${article.id}/show`}><i className="fa-solid fa-eye text-primary"></i></Link>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }

            </table>        
        </>
    )
}