const Prods = ({name, description})=>{

    return(
        <div className="card">
            <h5 className="card-header">{name}</h5>
                <div className="card-body">
                    <p className="card-text ">{description}</p>
                </div>
        </div>
    )
}

export default Prods
