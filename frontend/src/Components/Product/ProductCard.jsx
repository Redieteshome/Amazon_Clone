import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import styles from './product.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Type } from '../../Utility/action.type'
import { DataContext } from '../DataProvider/DataProvider'
function ProductCard({product,flex, renderDesc}) {
    const {image, title, id, rating, price, description} = product;

    const [state,dispatch]=useContext(DataContext)

    const addToCart =()=>{
dispatch({
  type: Type.ADD_TO_BASKET,
  item: {
    image,
    title,
    id,
    rating,
    price,
    description,
  },
});
    }
  return (
    <div className={`${styles.card_container} ${flex?styles.product_flexed : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{width:"750px"}} > {description}</div>}
        <div className={styles.rating}>
          {/* rating */}
          <Rating value={rating?.rate || 0} precision={0.1} />
          {/* rating counter */}
          <small>{rating?.count || 0}</small>
        </div>

        <div>
          {/* price  */}
          <CurrencyFormat amount={price} />
        </div>

        <button className={styles.button}
        onClick={addToCart}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard