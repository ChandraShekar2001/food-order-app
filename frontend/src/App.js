import "./App.css";
import { Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import OrderList from "./components/OrderList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FoodList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<OrderList />} />
      </Routes>
    </>
  );
}

export default App;
