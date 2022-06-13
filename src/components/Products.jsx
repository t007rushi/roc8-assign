import React from "react";
import {Card} from "./Card" 

export const Products = ({filteredData}) => {
    
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 grid-flow-columns auto-columns-auto ">
    {filteredData.length === 0?
    <span className="font-bold m-auto text-2xl">No Products Found Try again with different filters</span> :
    filteredData.map(prod =>{
        return(
            <Card prod={prod} key={prod.price}/>
        )
    })}
  </div>;
};
