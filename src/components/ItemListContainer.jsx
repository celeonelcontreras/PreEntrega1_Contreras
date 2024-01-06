import '../App.css'
import React from "react";

function ItemListContainer( props ) {
    let msj = props.msj;

    return (
        <div className='container'>
            <p>{msj}</p>
        </div>
    )
}

export default ItemListContainer;