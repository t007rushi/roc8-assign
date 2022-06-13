import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Products } from "./components/Products";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filtersArr, setFiltersArr] = useState([]);
  const [search, setSearch] = useState("");
  const filteredData =
    filtersArr.length === 0
      ? products
      : products.filter(
          (prod) =>
            filtersArr.includes(prod.brand) ||
            filtersArr.includes(prod.ram) ||
            filtersArr.includes(prod.cpu)
        );
  const filteredSearchData =
    search.length === 0
      ? filteredData
      : filteredData.filter((prod) => 
          prod.title.toLowerCase().includes(search.toLowerCase())
);

const ClearFilter = () => {
  setFiltersArr([]);
  setSearch("")
}

  const checkBoxHandler = (val) => {
    if (filtersArr.includes(val)) {
      const updatedArr = filtersArr.filter((value) => val !== value);
      setFiltersArr([...updatedArr]);
    } else {
      const updatedArr = [...filtersArr, val];
      setFiltersArr([...updatedArr]);
    }
  };

  const searchHandler = (sVal) => {
    setSearch(sVal);
  };

  useEffect(() => {
    fetch("https://62a717d997b6156bff8746f7.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="App">
      <Navbar search={search} searchHandler={searchHandler} />
      <div className="flex gap-2">
        <Sidebar checkBoxHandler={checkBoxHandler} filtersArr={filtersArr} ClearFilter={ClearFilter}/>
        <Products filteredData={filteredSearchData} />
      </div>
    </div>
  );
}

export default App;
