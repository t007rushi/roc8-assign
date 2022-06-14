import { createContext, useReducer, useContext } from "react";
import { FilterReducerFun, initialState } from "../reducer/FilterReducerFun";

const FilterContext = createContext(null);

const FilterContextPRovider = ({ children }) => {
  const [filterstate, dispactherforfilter] = useReducer(FilterReducerFun, initialState);

  return (
    <FilterContext.Provider value={{ filterstate, dispactherforfilter }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterContextPRovider, useFilter };