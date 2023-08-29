import { useState } from "react";
export const Cart = ({cartName, cartUrl, cartPrice , carts, setCarts, id}) => {
    const [count, setCount] = useState(1);
    
    function remove (){
        
        const newCart = [];
        for(let i = 0; i < carts.length; i++){
            if(carts[i].id !== id){
                newCart.push(carts[i])
            }
        }
        console.log(newCart.length)
         setCarts(newCart)

    }
    return(
        <div className="cart">
            <div className="cart-img">
                <img src={cartUrl}/>
            </div>
            <div className="cart-content">
                <h2>{cartName}</h2>
                <p>${cartPrice}</p>
                <div className="count">
                    <button onClick={() => setCount(count + 1)}>+</button>
                    <span>{count}</span>
                    <button onClick={() =>{if(count >= 2) setCount(count - 1)} }>-</button>
                </div>
                <button className="remove-btn" onClick={remove}>Remove From Cart</button>
            </div>
        </div>
    )
}