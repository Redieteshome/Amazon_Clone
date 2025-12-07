import React, { useContext } from "react";
import styles from "./cart.module.css";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";


function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total =basket.reduce((amount,item) => {
   return item.price + amount
  }, 0)
  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.cart_container
        }>
          <h2>Hello</h2>
          <h3>Your Shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps ! No item in your cart </p>
          ) : (
            basket?.map((item, i) => (
              <ProductCard
                key={i}
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}
              />
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>

              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" />
              <small>This Order contains a gift</small>
            </span>

            <Link to="/payments"> Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
