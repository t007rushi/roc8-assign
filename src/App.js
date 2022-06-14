import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex gap-2">
        <Sidebar />
        <Products />
      </div>
    </div>
  );
}

export default App;
