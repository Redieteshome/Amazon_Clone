// Import the useContext hook for accessing global state
import React, { useContext } from "react";
import styles from "./cart.module.css"; // Import CSS module for scoped styling
import Layout from "../../Components/Layout/Layout"; // Import Layout wrapper component

// Import global DataContext to access basket and user state
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from '../../Components/Product/ProductCard';

// Import CurrencyFormat component to display formatted currency values
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom"; // Import Link for client-side navigation

// Import action types for reducer dispatch
import { Type } from "../../Utility/action.type";

// Import icons for increment and decrement buttons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {

  // Destructure basket and user from global state, and get dispatch function
  const [{ basket, user }, dispatch] = useContext(DataContext);
 
  // Log basket contents to the console for debugging
  console.log(basket)

  // Calculate the total price of items in the basket
  // item.price * item.amount gives total per product
  // reduce accumulates the total amount
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount
  }, 0)

  // Function to increase the quantity of an item in the basket
  // Dispatches ADD_TO_BASKET action
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item
    })
  }

  // Function to decrease the quantity of an item in the basket
  // Dispatches REMOVE_FROM_BASKET action using item id
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    })
  }

  return (
    // Wrap cart page inside Layout component
    <Layout>

      {/* Main cart section */}
      <section className={styles.container}>

        {/* Left side: cart items */}
        <div className={styles.cart_container}>

          {/* Greeting message */}
          <h2>Hello</h2>
          <h3>Your Shopping basket</h3>
          <hr />

          {/* Show message if basket is empty */}
          {basket?.length == 0 ? (
            <p>Opps ! No item in your cart </p>
          ) : (
            // Map through basket items and render each product
            basket?.map((item, i) => (
              <section key={i} className={styles.cart_product}>

                {/* Display product details */}
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />

                {/* Quantity control buttons */}
                <div className={styles.btn_container}>
                  
                  {/* Increment item quantity */}
                  <button
                    className={styles.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={20}/>
                  </button>

                  {/* Display current item quantity */}
                  <span>{item.amount}</span>

                  {/* Decrement item quantity */}
                  <button
                    className={styles.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {/* Right side: subtotal section (only shown if basket is not empty) */}
        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>

              {/* Display number of items */}
              <p>Subtotal ({basket?.length} items)</p>

              {/* Display formatted total price */}
              <CurrencyFormat amount={total} />
            </div>

            {/* Gift option checkbox */}
            <span>
              <input type="checkbox" />
              <small>This Order contains a gift</small>
            </span>

            {/* Navigate to payments page */}
            <Link to="/payments"> Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
