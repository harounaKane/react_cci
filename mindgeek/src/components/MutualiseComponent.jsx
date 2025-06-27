export default function MutualiseComponent(props){
    return(
        <article>
            <h4>{props.titre} </h4>
                <p>
                    {props.desc}
                </p>
                {props.detail}

                <h5 className="text-center">{props.prix} € par mois</h5>

                <button>Commander</button>
        </article>
    )
}

