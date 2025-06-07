import "./App.css";
import Cart from "./components/Cart";
import ListProducts from "./components/ListProducts";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
