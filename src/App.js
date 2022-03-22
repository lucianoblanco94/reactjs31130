import React from "react";
import Navbar from "./components/Navbar";
import Cards from './components/cards/Cards'
// import {MiComponente} from "./components/miComponente";
import ItemListContainer from "./containers/ItemListContainer";
import {CustomButton} from './components/CustomButton/CustomButton';
// Primer paso: Crear una función. la primer letra del componente debe ser Mayus
const App = () => {

  const categorias = [{category: "Phones"}, {category: "Cameras"}, {category: "Notebooks"}, {category: "Drones"}, {category: "Pc Gamer"}, {category: "Tablets"}, {category: "Consolas"}];
  return ( 
    <>
      <Navbar categorias={categorias} />
      <ItemListContainer greeting="Bienvenido a TaleTech" />
     <Cards />
    </>
  );
};

export default App

