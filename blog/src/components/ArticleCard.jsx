export default function ArticleCard  ({titre, auteur, resume}){
    return(
        <div className="card" style={styles}>
            <h2> {titre} </h2>
            <div> <strong>Auteur : </strong> {auteur} </div>
            <p> {resume} </p>
            <button>Lire Plus</button>
        </div>
    );
};

const styles = {
    backgroundColor: "grey",
    margin: "10px",
    width: "300px",
    border: "1px solid red",
    borderRadius: "10%"
}