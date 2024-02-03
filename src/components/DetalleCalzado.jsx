import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetalleCalzado = () => {

const [data, setData] = useState({})
const {user_id} = useParams();

useEffect(() => {
    fetch('https://65bbed8552189914b5bd5860.mockapi.io/calzado/' + user_id)
    .then( (response) => response.json())
    .then( res_json => {
        setData(res_json);
        })
}, [])

    console.log(data, 'data')

    return (
        <>
        <h2>Detalle del Producto</h2>

        <ul>
            <li>Nombre: {data.nombre} </li>
            <li>Precio: {data.precio} </li>
            <li>Stock: {data.nombre} </li>
        </ul>

        </>
    )
}

export default DetalleCalzado;