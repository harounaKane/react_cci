import HomeComponent from "../components/HomeComponent";

export default function Home(){
    return(
        <>
            <section>
                <h3>Notre solution en 3 points</h3>
                <HomeComponent
                icon={<i className='fa fa-cogs'></i>}
                titre="Configuration" 
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ex voluptatem iure qui illum, quam labore! Necessitatibus laudantium ad ut. Ipsum ex voluptatem iure qui illum"/>
                
                <HomeComponent
                icon={<i className="fa-solid fa-chart-area"></i>}
                titre="Monitoring" 
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ex voluptatem iure qui illum, quam labore! Necessitatibus laudantium ad ut." />

                <HomeComponent
                icon={<i className='fa fa-database'></i>} 
                titre="Sauvegarde" 
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ex voluptatem iure qui illum, quam labore! Necessitatibus laudantium ad ut. lorem ipsume dolor ..." />                
            </section>  

            <section className="iconesColor">
                <h3>Choisissez votre style d'hébergement</h3>

                <HomeComponent 
                icon={<i className='fa fa-users'></i>} 
                titre="Serveur mutualisé"
                content={
                    <>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ex voluptatem iure qui illum, quam labore! Necessitatibus laudantium ad ut. lorem ipsume dolor ...
                    <span className="d-block  mt-2"></span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ex voluptatem iure qui illum, quam labore! Necessitatibus laudantium ad ut. lorem ipsume dolor ...
                    </>
                }
                prix="19€ / mois"
                />

                 <HomeComponent 
                icon={<i className='fa fa-user'></i>} 
                titre="Serveur dédié"
                content={
                    <>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ex voluptatem iure qui illum, quam labore! Necessitatibus laudantium ad ut.
                    <span className="d-block  mt-2"></span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ex voluptatem iure qr ...
                    </>
                }
                prix="39€ / mois"
                />

                 <HomeComponent 
                icon={<i className='fa fa-cloud'></i>} 
                titre="Service Cloud"
                content={
                    <>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ex voluptatem iure qui illum, quam labore! Necessitatibus laudantium ad ut. lorem ipsume dolor ...
                    <span className="d-block  mt-2"></span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ex voluptatem iure qui illum, quam labore! Necessitatibus laudantium ad ut. lorem ipsume dolor ...
                    </>
                }
                prix="49€ / mois"
                />
            </section>
        </>
    )
}