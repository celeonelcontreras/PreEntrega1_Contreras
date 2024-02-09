import React, { useEffect, useState } from "react";
import '../App.css'
import { NavLink } from "react-router-dom";

const SeccionRopa = () => {

    const [ropas, setRopas] = useState([])

    useEffect( () => {

        fetch('https://65bbed8552189914b5bd5860.mockapi.io/ropa/')
        .then(response => response.json())
        .then(res_json => setRopas(res_json))

    }, [])

    console.log(ropas)

    return (
        <>
        
        <h1>Ropa</h1>

        <ul className="lista-padre">
            {
                ropas.map( ropa => <li> <NavLink className="lista-hijo" to={`/detalle-ropa/${ropa.id}`}>{ropa.nombre}</NavLink></li>)
            }
        </ul>

        </>
    )
}

export default SeccionRopa;