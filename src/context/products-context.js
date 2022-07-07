import { createContext, useContext,  useState } from "react";
import {data} from "../data"

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [prodArr, setProdArr] = useState(data);

  return (
    <ProductContext.Provider value={{ prodArr,setProdArr }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
