import React from "react";
import "./Navbar.css";
// import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
    return (
        <header>
            <navbar className='navbar'>
                <ul>
                    <li><a href='#' id='home'><img src='#' alt='logo' /></a></li>
                    <li><a href='#' id='phones-section'><span>Celulares</span></a></li>
                    <li><a href='#' id='cameras-section'><span>Camaras</span></a></li>
                    <li><a href='#' id='laptops-section'><span>Laptops</span></a></li>
                    <li><a href='#' id='drones-section'><span>Drones</span></a></li>
                    <li><a href='#' id='pc'><span>Pc</span></a></li>
                    <li><a href='#' id='tablets'><span>Tablets</span></a></li>
                    <li><a href='#' id='keyboards'><span>Teclados</span></a></li>
                    <li><a href='#' id='phones'><span>Monitores</span></a></li>
                    <li><a href='#' id='phones'> Search </a></li>
                </ul>
            </navbar>
        </header>
    );
};

export default Navbar