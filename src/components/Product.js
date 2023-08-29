export const Product = ({product, carts, setCarts}) => {
    
    function addToCart(){
        for(let i =0; i < carts.length; i++){
            if(carts[i].id === product.id){
                alert('Item Already in Cart');
                return;
            }    
        }   
            setCarts([...carts, product]);
    }
    return (
        <div className="product">
            <div className="prod-image">
                <img  src={product.thumbnail}/>
            </div>
            <div className="content">
                <h2>{product.title}</h2>            
                <p className="price">${product.price}</p>
                <button onClick={addToCart}> Add to Cart </button>
                <p className="desc">#{product.category}</p>
            </div>            
        </div>
    )
}