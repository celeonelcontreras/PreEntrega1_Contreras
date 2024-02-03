import React, { useEffect, useState } from "react";
import '../App.css'
import { NavLink } from "react-router-dom";

const SeccionCalzado = () => {

    const [calzados, setCalzados] = useState([])

    useEffect( () => {

        fetch('https://65bbed8552189914b5bd5860.mockapi.io/calzado/')
        .then(response => response.json())
        .then(res_json => setCalzados(res_json))

    }, [])

    console.log(calzados)

    return (
        <>
        
        <h1>Calzado</h1>

        <ul>
            {
                calzados.map( calzado => <li> <NavLink to={`/detalle-calzado/${calzado.id}`}>{calzado.nombre}</NavLink></li>)
            }
        </ul>

        </>
    )
}

export default SeccionCalzado;
