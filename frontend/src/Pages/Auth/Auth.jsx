import React, { useState, useContext } from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
import {auth} from "../../Utility/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {DataContext} from "../../Components/DataProvider/DataProvider"
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [{user}, dispatch] = useContext(DataContext)

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    if (e.target.name === "signin") {
      // Firebase auth
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          })
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={styles.login_signInButton}
          >
            Sign In
          </button>
        </form>

        {/* agreement */}
        <p>
          By Signing-in you agree to the AMAZON FAKE CLONE Conditions ofUse &
          Sale. Please see our Privacy Notice, our Cookies Notice andour
          Interest-Based Ads Notice.
        </p>

        {/* create account btn */}
        <button
          type="submit"
          name="signUp"
          onClick={authHandler}
          className={styles.login_registerButton}
        >
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
