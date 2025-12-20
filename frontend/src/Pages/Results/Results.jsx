// // Import React and hooks for managing state and side effects
import React, { useEffect, useState } from "react";
// Import scoped CSS module for styling
import styles from "./results.module.css";
import Layout from "../../Components/Layout/Layout";

// Import useParams hook to read URL parameters
import { useParams } from "react-router-dom";

// Import axios for making HTTP requests
import axios from "axios";

// Import base product API URL
import { productUrl } from "../../Api/endpoint"; 
import ProductCard from "../../Components/Product/ProductCard";

// Import Loader component to show loading state
import Loader from "../../Components/Loader/Loader";

function Results() {

  // State to store fetched products
  const [results, setResults] = useState([]);

  // State to track loading status
  const [isLoading, setIsLoading] = useState(false);

  // Extract categoryName parameter from the URL
  const { categoryName } = useParams();

  // Log route parameters for debugging
  console.log(useParams())

  // Fetch products when component mounts
  useEffect(() => {

    // Set loading state to true before API request
    setIsLoading(true);

    // Fetch products by category from API
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        console.log(res)
        // Store API response data in state
        setResults(res.data)

        // Stop loading after successful response
        setIsLoading(false);
      })
      .catch((err) => {

        // Log error if request fails
        console.log(err)

        // Stop loading even if request fails
        setIsLoading(false);
      });
  }, []);

  return (
    // Wrap results page inside Layout component
    <Layout>

      {/* Show loader while data is being fetched */}
      {isLoading ? (
        <Loader />
      ) : (
        <section>

          {/* Page title */}
          <h1 style={{ padding: "30px" }}>Results</h1>

          {/* Display current category */}
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />

          {/* Products container */}
          <div className={styles.products_container}>

            {/* Render product cards for each fetched product */}
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}


export default Results;
