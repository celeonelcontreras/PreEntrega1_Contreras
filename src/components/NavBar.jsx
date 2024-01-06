import '../App.css'
import React from "react";

function NavBar() {
    return (
        <div  className='nav-bar'>
            <ul className='nav-list'>
                <li><a href="#">CALZADO</a></li>
                <li><a href="#">ROPA</a></li>
                <li><a href="#">ACCESORIOS</a></li>
            </ul>
        </div>    
    )
}

export default NavBar;