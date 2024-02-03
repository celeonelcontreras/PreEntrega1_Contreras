import '../App.css'
import { NavLink } from 'react-router-dom';
import React from "react";

function NavBar() {
    return (
        <div  className='nav-bar'>
            <ul className='nav-list'>
                <li><NavLink to="/calzado">Calzado</NavLink></li>
                <li><NavLink to="/ropa">Ropa</NavLink></li>
                <li><NavLink to="/accesorios">Accesorios</NavLink></li>
            </ul>
        </div>    
    )
}

export default NavBar;