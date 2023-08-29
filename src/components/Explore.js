import { FilterResult } from "./FilterResult"
import { Filter } from "./Filter"

export const Explore = ({setResults, results,  setCarts, carts}) => {
    return(
        <div>
            <Filter setResults={setResults}/>
            <FilterResult results={results} carts={carts} setCarts={setCarts } />     
        </div>
    )
}
