import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import styles from './product.module.css'

function Product() {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            // console.log(res)
            setProducts(res.data)
        }).catch((err)=>{console.log(err)})
    },[])
  return (
    <section className={styles.products_container}>
      {products.map((singleProduct)=>(
        <ProductCard product={singleProduct} key={singleProduct.id}/>
      ))}
    </section>
  )
}

export default Product