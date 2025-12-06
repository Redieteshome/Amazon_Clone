import React from "react";
import Layout from "../../Components/Layout/Layout";
import CarouselEffect from "../../Components/CarouselEffect/CarouselEffect";
import Category from "../../Components/Catgeory/Category";
import Product from "../../Components/Product/Product";

function Landing() {
  return (
    <Layout>
      <CarouselEffect />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
