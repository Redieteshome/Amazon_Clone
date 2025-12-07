import React, { use, useEffect, useState } from 'react'
import styles from "./productdetail.module.css";
import Layout from '../../Components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard';
import { productUrl } from '../../Api/endpoint';

function ProductDetail() {
    const {productId} = useParams() 
    const [singleProduct,setSingleProduct] =useState({})
    
    useEffect(() => {
        axios.get(`${productUrl}/products/${productId}`)
        .then((res) => {
          setSingleProduct(res.data)
        }).catch((err) => {console.log(err)})
    }, [])
  
    return (
    <Layout>
      <ProductCard product ={singleProduct}/>
    </Layout>
  );
}

export default ProductDetail