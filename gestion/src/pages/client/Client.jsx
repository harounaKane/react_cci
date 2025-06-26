import { Link } from "react-router-dom";
import clients from "../../data/clients.json";

export default function Client(){
    return(
        <>
            <h2 className="text-center">Liste des clients</h2>

            <table className="table table-striped">
                <thead>
                    <tr className="table-dark">
                        <th>Prénom</th>
                        <th>Ville</th>
                        <th>Voir</th>
                    </tr>
                </thead>

                {
                    clients.map( client => (
                        <tbody key={client.id}>
                            <tr>
                                <td> {client.prenom} </td>
                                <td> {client.ville} </td>
                                <td>
                                    <Link to={`/client/${client.id}/show`}><i className="fa-solid fa-eye text-primary"></i></Link>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }

            </table>        
        </>
    )
}