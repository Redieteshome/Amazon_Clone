import React from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <section className={styles.login}>
      {/* logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      {/* form */}
      <div className={styles.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <button className={styles.login_signInButton}>Sign In</button>
        </form>
        
        {/* agreement */}
        <p>
          By Signing-in you agree to the AMAZON FAKE CLONE Conditions ofUse & Sale. Please see our Privacy Notice, our Cookies Notice andour Interest-Based Ads Notice.
        </p>

        {/* create account btn */}
        <button className={styles.login_registerButton}>Create your Amazon Account</button>

      </div>
    </section>
  );
}

export default Auth;
