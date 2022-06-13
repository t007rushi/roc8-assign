import React from "react";
import {Card} from "./Card" 

export const Products = ({filteredData}) => {
    
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
    {filteredData.length === 0?
    <h1 className="font-bold m-auto text-2xl">No Products Found Try again with different filters</h1> :
    filteredData.map(prod =>{
        return(
            <Card prod={prod} key={prod.price}/>
        )
    })}
  </div>;
};
