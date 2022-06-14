import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/products-context";
import { FilterContextPRovider } from "./context/filter-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <FilterContextPRovider>
        <App />
      </FilterContextPRovider>
    </ProductProvider>
  </React.StrictMode>
);
