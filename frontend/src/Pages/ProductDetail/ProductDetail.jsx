// Import React and hooks for state management and side effects
import React, { use, useEffect, useState } from "react";

// Import Layout wrapper component
import Layout from "../../Components/Layout/Layout";

// Import useParams to access route parameters
import { useParams } from "react-router-dom";

// Import axios for HTTP requests
import axios from "axios";

// Import reusable ProductCard component
import ProductCard from "../../Components/Product/ProductCard";

// Import base product API URL
import { productUrl } from "../../Api/endpoint";

// Import Loader component for loading state
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  // State to store single product data
  const [singleProduct, setSingleProduct] = useState({});

  // State to track loading status
  const [isLoading, setIsLoading] = useState(false);

  // Extract productId from URL parameters
  const { productId } = useParams();

  // Fetch product details when component mounts
  useEffect(() => {
    // Set loading state to true before API request
    setIsLoading(true);

    // Fetch single product by ID from API
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        // Store fetched product data in state
        setSingleProduct(res.data);

        // Stop loading after successful response
        setIsLoading(false);
      })
      .catch((err) => {
        // Log error if request fails
        console.log(err);

        // Stop loading even if request fails
        setIsLoading(false);
      });
  }, []);

  return (
    // Wrap product detail page inside Layout component
    <Layout>
      {/* Show loader while product data is being fetched */}
      {isLoading ? (
        <Loader />
      ) : (
        // Display single product details using ProductCard
        <ProductCard
          key={singleProduct.id}
          product={singleProduct}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
}


export default ProductDetail;
