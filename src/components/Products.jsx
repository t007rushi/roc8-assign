import React, { Fragment } from "react";
import { useFilter } from "../context/filter-context";
import { useProducts } from "../context/products-context";
import { Card } from "./Card";

export const Products = () => {
  const { prodArr } = useProducts();
  const { filterstate } = useFilter();
  const filteredData =
    filterstate.filterby.length === 0
      ? prodArr
      : prodArr.filter(
          (prod) =>
            filterstate.filterby.includes(prod.brand) ||
            filterstate.filterby.includes(prod.IdealFor) ||
            filterstate.filterby.includes(prod.size)
        );
  const filteredSearchData =
    filterstate.search.length === 0
      ? filteredData
      : filteredData.filter((prod) =>
          prod.title.toLowerCase().includes(filterstate.search.toLowerCase())
        );

  return (
    <Fragment>
      {filteredSearchData.length === 0 ? (
        <span className="font-bold m-auto text-2xl">
          No Products Found Try again with different filters
        </span>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 grid-flow-columns auto-columns-auto ">
          {filteredSearchData.map((prod) => {
            return <Card prod={prod} key={prod.price} />;
          })}
        </div>
      )}
    </Fragment>
  );
};
