import React from "react";
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export const Filter = ({setResults}) => {
    const [input, setInput] = useState("");
   
    const fetchData = (value) => {
      fetch("https://dummyjson.com/products/")
        .then((response) => response.json())
        .then((json) => {
            const results = json.products.filter((data) => {
                return (
                    value &&
                    data &&
                    data.title &&
                    data.title.toLowerCase().includes(value)
                )
            });
            setResults(results);
        })
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return(
        <div className="filter-box">
            <input 
                placeholder="enter a category"
                value = {input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        </div>
    )
}
