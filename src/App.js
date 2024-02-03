import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import NavBarApp from "./NavBarApp";
import SeccionCalzado from './components/SeccionCalzado';
import DetalleCalzado from './components/DetalleCalzado';
import SeccionRopa from './components/SeccionRopa';
import DetalleRopa from './components/DetalleRopa';

function App() {
  return (
    <div className="App">
      
      
      <h1>CONTRERAS-SHOP</h1>

      <BrowserRouter>
      
      <NavBarApp/>

        <Routes>

          <Route path='home'/>
          <Route path='calzado' element = {<SeccionCalzado/>} />
          <Route path='/detalle-calzado/:user_id' element={<DetalleCalzado/>}/>
          <Route path='ropa' element = {<SeccionRopa/>} />
          <Route path='/detalle-ropa/:user_id' element={<DetalleRopa/>}/>
          <Route path='accesorios' element = {<h1>Accesorios</h1>} />

        </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
