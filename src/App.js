import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Cards from './components/cards/Cards'
import ItemListContainer from "./containers/ItemListContainer";
import {CustomButton} from './components/CustomButton/CustomButton';
// Primer paso: Crear una función. la primer letra del componente debe ser Mayus
const App = () => {

  const [show, setShow] = useState(false);
  const categorias = [{category: "Phones"}, {category: "Cameras"}, {category: "Notebooks"}, {category: "Drones"}, {category: "Pc Gamer"}, {category: "Tablets"}, {category: "Consolas"}];
  const productos = [
    { title: "Phones", src: "../../multimedia/img/phones.jpg", alt: "phones" },
    { title: "Cameras", src: "../../multimedia/img/cameras.jpg", alt: "cameras" },
    { title: "Notebooks", src: "../../multimedia/img/notebooks.jpg", alt: "notebooks" },
    { title: "Drones", src: "../../multimedia/img/drones.jpg", alt: "drones" },
    { title: "Pc Gamer", src: "../../multimedia/img/pcgamer.jpg", alt: "pc gamer" },
    { title: "Watches", src: "../../multimedia/img/watches.jpg", alt: "watches" }
]
  return ( 
    <>
      <Navbar categorias={categorias} />
      {/* {show ? 
      (<ItemListContainer greeting="TaleTech" />)
      : (<h1>Aca no hay nad</h1>)
      } */}
      <ItemListContainer greeting="TaleTech" />
      <Cards productos={productos} />
    </>
  );
};

export default App

