import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import carrito from '../image/carrito1.png'


const DetalleRopa = () => {

const [data, setData] = useState({})
const {user_id} = useParams();

useEffect(() => {
    fetch('https://65bbed8552189914b5bd5860.mockapi.io/ropa/' + user_id)
    .then( (response) => response.json())
    .then( res_json => {
        setData(res_json);
        })
}, [])

    console.log(data, 'data')

    return (
        <>
        <h2 className="detalle-titulo">Detalle del Producto</h2>

        <ul className="lista-u-padre">
            <li className="lista-u-hijo">Nombre: {data.nombre} </li>
            <li className="lista-u-hijo">Precio: {data.precio} </li>
            <li className="lista-u-hijo">Stock: {data.stock} </li>
        </ul>

        <div className="img-detalle-padre">
        <img  src={carrito} alt="" className='img-detalle-hijo'/>
        </div>

        <div className="agregar-carro-padre">
        <NavLink className={'agregar-carro'} to={`/producto-agregado`}>AGREGAR AL CARRO</NavLink>
        </div>

        </>
    )
}

export default DetalleRopa;