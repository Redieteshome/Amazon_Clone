import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import CarouselEffect from './Components/CarouselEffect/CarouselEffect'
import Category from './Components/Catgeory/Category'
import Product from './Components/Product/Product'

function App() {
 

  return (
    <>
      <Header />
      <CarouselEffect />
      <Category/>
      <Product />
    </>
  )
}

export default App
