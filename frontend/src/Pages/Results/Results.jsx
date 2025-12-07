import React, { useEffect, useState } from "react";
import styles from "./results.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endpoint"; 
import ProductCard from "../../Components/Product/ProductCard";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {console.log(err)});
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{padding: "30px"}} >Results</h1>
        <p style={{padding: '30px'}}>Category / {categoryName}</p>
        <hr />

        <div className={styles.products_container}>
            {
                results?.map((product) => (<ProductCard 
                    key={product.id}
                    product={product}
                />))
            }
        </div>
      </section>
    </Layout>
  );
}

export default Results;
