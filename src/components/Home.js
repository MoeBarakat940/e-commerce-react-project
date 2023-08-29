import { useState, useEffect } from "react";
import { Product } from './Product';
export const Home = ({carts, setCarts}) => {
    const[products, setProducts] = useState([]);
    useEffect(() => {
      fetch(`https://dummyjson.com/products/`)
        .then((res) => res.json())
        .then((data) => {
          
          setProducts(data.products);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }, []);

    return(
        <div className='main'>
        {products.map((el) => <Product carts={carts} setCarts={setCarts} product={el}/>)} 
        </div>
    )
}
