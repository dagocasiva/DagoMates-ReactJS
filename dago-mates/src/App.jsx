import Navbar from '../src/components/Navbar'
import ItemListContainer from '../src/components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import '../styles/styles.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CarritoProvider } from "../context/CarritoContext";
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  
  return (
    <CarritoProvider>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/not-found" element={ <h2>Not found</h2> }/>
          <Route path="*" element={ <Navigate to={"/not-found"}/> }/>
        </Routes>
    
    </BrowserRouter>
    <ToastContainer/>
    </CarritoProvider>
  )
}

export default App
