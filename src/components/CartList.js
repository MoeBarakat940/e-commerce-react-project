import { Cart } from "./Cart"
export const CartList = ({carts, setCarts}) => {
    return (
      <div className="cart-list">
        <h2>What is in my Cart?</h2>
        <div className="main">
          
            {
            carts.map((el) =>{
              return <Cart cartName={el.title} 
                           cartUrl={el.thumbnail}
                           cartPrice={el.price} 
                           carts={carts}
                           setCarts={setCarts}
                           id={el.id}
                            />
    
            })
          }
        </div>
      </div>

      
    )
}