import React from "react";
import "./Navbar.css";
import "../App"
import SearchIcon from '@mui/icons-material/Search';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';

    const categorias = [
        { category: "jewelery", route: "/category/jewelery", id:"jewels" },
        { category: "men's clothing", route: "/category/men's clothing", id:"mensclothing" },
        {category : "women's clothing", route: "/category/women's clothing", id: "womenclothing"},
        { category: "electronics", route: "/category/electronics", id:"electronics" },
        ];

const Navbar = () => {
    return (
        <>
        <header>
            <navbar className='navbar'>
                <ul>
                    <li><NavLink to='/' id='home'><CatchingPokemonIcon /></NavLink></li>
                    {categorias.map((element, index) => {
                        return  <li key={index}><NavLink to={element.route} >{element.category}</NavLink></li>
                    })}
                    <li><Link to='#'><SearchIcon /></Link></li>
                    <li>
                    <NavLink to="/cart"><CartWidget /></NavLink>
                    </li>                    
                </ul>
            </navbar>         
        </header>
        </>
    );
};

export default Navbar