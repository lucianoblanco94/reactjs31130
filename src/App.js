import { Margin } from "@mui/icons-material";
import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";

const App = () => {

  const categorias = [{category: "Phones"}, {category: "Cameras"}, {category: "Notebooks"}, {category: "Drones"}, {category: "Pc Gamer"}, {category: "Tablets"}, {category: "Consolas"}];
  
  return ( 
    <>

      <div style= {bodyStyle}>
        <Navbar categorias={categorias} />
        <ItemListContainer greeting="TaleTech" />
      </div>

    </>
  );
};

export default App

const bodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  
}