import { useState } from 'react'
import Navbar from '../src/components/Navbar'
import CartWidget from '../src/components/CartWidget'
import ItemListContainer from '../src/components/ItemListContainer'
import '../styles/styles.scss'

function App() {
  
  return (
    <>
    <Navbar />
    <ItemListContainer greetings={'Hola mundo'}/>
    </>
  )
}

export default App
