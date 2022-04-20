import React from "react";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import CategoryContainer from "./containers/Category/CategoryContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart/Cart.jsx';
import {Error} from './components/Error/Error'

const App = () => {

  const categorias = [
    { category: "Phones", route: "/category/phones" },
    { category: "Cameras", route: "/category/cameras" },
    { category: "Notebooks", route: "/category/notebooks" },
    { category: "Drones", route: "/category/dron" },
    { category: "Pc Gamer", route: "/category/pcgamer" },
    { category: "Tablets", route: "/category/tablets" },
    { category: "Consolas", route: "/category/consoles" }];

  return (

    <BrowserRouter>     
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Shop Online" />} />
          <Route path="/category/:category" element={<ItemListContainer greeting="Shop Online" />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/" element={<Error />}/> */}
        </Routes>
        {/* <CategoryContainer /> */}
    </BrowserRouter>


  );
};

export default App
