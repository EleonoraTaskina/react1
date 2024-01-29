export const TattooMashine = (props) => {
    return (
        <div className="tattoo-card">
            <img src="/public/images/tatto/tatMash1.png" alt="tattoo" />
            <h4>{props.mashine.produser}</h4>
            <h6>{props.mashine.model}</h6>
            <p>{props.mashine.price} EUR</p>
            <p>{props.mashine.available ? 'Out in stock' : 'Out of Stock'}</p>
        </div>

    )
}
