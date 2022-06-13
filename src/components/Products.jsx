import React from "react";
import {Card} from "./Card" 

export const Products = ({filteredData}) => {
    
  return <div className="grid grid-cols-3 gap-6">
    {filteredData.map(prod =>{
        return(
            <Card prod={prod} key={prod.price}/>
        )
    })}
  </div>;
};
