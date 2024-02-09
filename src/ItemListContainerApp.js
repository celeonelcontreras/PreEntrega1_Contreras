import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarApp from "./NavBarApp";
import SeccionCalzado from './components/SeccionCalzado';
import DetalleCalzado from './components/DetalleCalzado';
import SeccionRopa from './components/SeccionRopa';
import DetalleRopa from './components/DetalleRopa';
import AgregarCarroApp from './AgregarCarroApp';

function ItemListContainerApp() {
    return (
        <BrowserRouter>

        <NavBarApp/>
        
            <Routes>

            <Route path='home'/>
            <Route path='calzado' element = {<SeccionCalzado/>} />
            <Route path='/detalle-calzado/:user_id' element={<DetalleCalzado/>}/>
            <Route path='ropa' element = {<SeccionRopa/>} />
            <Route path='/detalle-ropa/:user_id' element={<DetalleRopa/>}/>
            <Route path='accesorios' element = {<h1>Accesorios</h1>} />
            <Route path='producto-agregado' element= {<AgregarCarroApp/>}/>

            </Routes>

        </BrowserRouter>
    )
}

export default ItemListContainerApp;