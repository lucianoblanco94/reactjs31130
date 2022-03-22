import React from "react";
import "./Navbar.css";
import "../App"
import SearchIcon from '@mui/icons-material/Search';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import CartWidget from './CartWidget';

const Navbar = (props) => {
    return (
        <>
        <header>
            <navbar className='navbar'>
                <ul>
                    <li><a href='#' id='home'><img src='#' alt='' /><CatchingPokemonIcon /></a></li>
                    {props.categorias.map((element, index) => {
                        return  <li key={index}><a href='#' >{element.category}</a></li>
                    })}
                    <li><a href='#'><SearchIcon /></a></li>
                    <CartWidget />
                </ul>
            </navbar>
         
        </header>
        </>
    );
};

export default Navbar