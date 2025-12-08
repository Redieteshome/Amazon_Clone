import React, { useContext } from "react";
import styles from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
import { Link, } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import {auth} from "../../Utility/firebase"

function Header() {
  const [{user, basket}, dispatch] = useContext(DataContext)
  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)
  return (
    <section className={styles.fixed}>
      <section>
        <div className={styles.header_container}>
          {/* ==== LOGO + DELIVERY SECTION ==== */}
          <div className={styles.logo_container}>
            <Link to="/">
              {/* Amazon Logo */}
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>

            {/* Delivery location section */}
            <div className={styles.delivery}>
              <span>
                <SlLocationPin /> {/* Location icon */}
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span> {/* Country name */}
              </div>
            </div>
          </div>

          {/* ==== SEARCH BAR ==== */}
          <div className={styles.search}>
            {/* Category dropdown */}
            <select name="" id="">
              <option value="">All</option>
            </select>

            {/* Search input */}
            <input type="text" />

            {/* Search icon */}
            <BsSearch size={38} />
          </div>

          {/* ==== RIGHT SIDE LINKS (Language, Account, Orders, Cart) ==== */}
          <div className={styles.order_container}>
            {/* Language selector */}
            <Link to="" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/960px-Flag_of_the_United_States.svg.png?20240524035322"
                 alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/* Account section */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            {/* Orders section */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>

            {/* Cart section */}
            <Link to="/cart" className={styles.cart}>
              <BiCart size={35} /> {/* Cart icon */}
              <span>{totalItem}</span> {/* Item count */}
            </Link>
          </div>
        </div>
      </section>

      {/* ==== LOWER NAVIGATION HEADER ==== */}
      <LowerHeader />
    </section>
  );
}

export default Header;
