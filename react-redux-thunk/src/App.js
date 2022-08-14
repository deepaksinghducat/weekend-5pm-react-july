import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/cart" element={<Cart />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
