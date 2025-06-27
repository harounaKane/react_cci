export default function HomeComponent(props){
    return(
        <article className="iconesColor">
            <div>
                {props.icon}
                <div> {props.titre} </div>
                <div> {props.prix} </div>
            </div>
            <p>
                {props.content}
            </p>
        </article>
    )
}

