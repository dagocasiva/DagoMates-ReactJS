import Navbar from '../src/components/Navbar'
import ItemListContainer from '../src/components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import '../styles/styles.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path="/not-found" element={ <h2>Not found</h2> }/>
          <Route path="*" element={ <Navigate to={"/not-found"}/> }/>
        </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
