import React, { use, useEffect, useState } from 'react'
import styles from "./productdetail.module.css";
import Layout from '../../Components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard';
import { productUrl } from '../../Api/endpoint';
import Loader from '../../Components/Loader/Loader';

function ProductDetail() {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
    const {productId} = useParams() 
    
    
    useEffect(() => {
      setIsLoading
        axios.get(`${productUrl}/products/${productId}`)
        .then((res) => {
          setSingleProduct(res.data)
          setIsLoading(false)
        }).catch((err) => {console.log(err)
          setIsLoading(false)
        })
    }, [])
  
    return (
    <Layout>
      {isLoading? (<Loader />):  (<ProductCard product ={singleProduct}/>)}
     
    </Layout>
  );
}

export default ProductDetail