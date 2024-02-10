import '../App.css'
import React from "react";
import carrito from '../image/carrito1.png'

function CartWidget() {
    return (
        <div className='carrito'>
            <img src={carrito} alt="" className='img'/>
            <p>1</p>
        </div>

    )
}

export default CartWidget;
