import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProdList from './components/ProdList/ProdList';
import Inicio from './components/Inicio/Inicio';
import Cotizacion from './components/Cotizacion/Cotizacion';
import Productores from './components/Productores/Productores'
import Auditoria from './components/Auditoria/Auditoria';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/categoria/:categoryId' element={<ProdList />} />
          <Route path='/cotizacion' element={<Cotizacion />} />
          <Route path='/productores' element={<Productores />} />
          <Route path='/auditoria' element={<Auditoria />} />
          <Route path='*'element={<h3 className='error'>404 - PRODUCT NOT FOUND</h3>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
