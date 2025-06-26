import { useParams } from "react-router-dom";
import clients from "../../data/clients.json";


export default function DetailClient(){
    const { id } = useParams();
    const client = clients.find( c => c.id == id);    
    
    if( !client ) 
        return "pas de clien avec cet id "; 
    
    return(
        <>
            <img src="https://placehold.co/400" alt="" className="w-25"/>
            <div> <strong>{client.prenom} de {client.ville} </strong></div>
          
        </>
    )
}