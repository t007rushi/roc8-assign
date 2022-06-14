import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [prodArr, setProdArr] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://62a717d997b6156bff8746f7.mockapi.io/products"
        );
        const data = await res.json();
        setProdArr(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ prodArr }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
