// import { useEffect, useState } from "react";
import MutualiseComponent from "../components/MutualiseComponent";

export default function Mutualise(){
    // const [users, setUser] = useState([]);

    // useEffect( () => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(ressult => ressult.json())
    //     .then(data => setUser(data))
    //     .catch( err => console.log("Erreur apel API: ", err)
    //     )
    // }); 

    return(
        <>
            <h3>Le serveur mutualisé</h3>
            <p className="px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae enim provident debitis ea, corporis deserunt molestias, recusandae eaque sequi impedit rem assumenda fugiat consectetur perferendis quas accusamus molestiae architecto tenetur delectus ipsa commodi aspernatur?
            </p>

            <section className="pages">
                {/* {
                    users.map( user => (
                        <MutualiseComponent 
                            titre={user.name} 
                            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deserunt!"
                            detail={<ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                </ul>}
                            prix="2,99"
                            />
                    ) )
                } */}

                <MutualiseComponent 
                titre="Perso - 100 Go" 
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deserunt!"
                detail={<ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    </ul>}
                prix="2,99"
                />
                <MutualiseComponent 
                titre="Perso - 100 Go" 
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deserunt!"
                detail={<ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    </ul>}
                prix="2,99"
                />
                <MutualiseComponent 
                titre="Perso - 100 Go" 
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deserunt!"
                detail={<ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    </ul>}
                prix="2,99"
                />
                
            </section>
        </>
    )
}
