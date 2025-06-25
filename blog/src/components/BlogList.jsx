import ArticleCard from "./ArticleCard";

const BlogList = () => {
    const sommaire = "Uniquely embrace future-proof convergence via multifunctional schemas. Distinctively plagiarize wireless opportunities vis-a-vis emerging supply chains. Professionally cultivate long-term high-impact partnerships before efficient alignments. Phosfluorescently incentivize.";

    const articles = [
        {titre: "Oridnateur de bureau", auteur: "Azzedine", resume:sommaire},
        {titre: "Ecran de bureau", auteur: "Salah", resume:sommaire},
        {titre: "Clavier sans fil", auteur: "Latifa", resume:sommaire}
    ];    

    return (
        <div className="blog-liste" style={styles}>
            {
                articles.map( (article, index) => (
                    <ArticleCard 
                        key={index}
                        titre={article.titre}
                        auteur={article.auteur}
                        resume={article.resume}
                    />
                ) )
            }
        </div>
    );
}

export default BlogList;

const styles = {
    display: "flex", 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap"    
}