import { useState} from "react";


export const TattooMashine = (props) => {
    const [amount, setAmount] = useState(0);
    const [isFavorite,setIsfavorite] = useState(props.mashine.favorite);

    const minusHandler =() => {
        if ( amount == 0) return
        setAmount(amount - 1)
    }

    const plusHandler =() => {
        setAmount(amount + 1)
    }

    const addToCardHandler =() => {
        
    }

    const favHandler = () =>{
        setIsfavorite((prev) => { 
            return !prev
        })
    }


    return (
        <div className="tattoo-card">
            <div className={isFavorite ? "favorite plus": "favorite"} onClick={favHandler}>
                <img src="public/images/mdi-light_heart.png" alt="heart" />
            </div>
            <img src={`/public/images/tattoo/${props.mashine.img}.png`} alt="tattoo" />
            <h4>{props.mashine.produser}</h4>
            <h6>{props.mashine.model}</h6>
            <p>{props.mashine.price} 000 ₽</p>

            <button onClick={addToCardHandler}>Добавить в корзину</button>
        
                <div className="tattoo-counter">
                    <button className="minus" onClick={minusHandler}>-</button>
                    <div className="amount" >{amount}</div>
                    <button className="plus"onClick={plusHandler}>+</button>
                </div>
        </div>
        
    )
}
