import { Product } from './Product'
export const FilterResult = ({ results, carts, setCarts }) =>{
    return (
        <div className='main'>
            {
                results.map((result, id) => {
                    return <Product 
                                carts={carts}
                                setCarts={setCarts}
                                key={id}
                                product={result}
                            />
                })
            }
        </div>
    )
}
