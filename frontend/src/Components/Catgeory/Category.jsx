import React from 'react'
import { categoryInfos } from './categoryFullInfos'
import CategoryCard from './CategoryCard'
import styles from './category.module.css'
function Category() {
  return (
    <section className={styles.category_container}>
      {
        categoryInfos.map((infos,index)=>{
          return  <CategoryCard key={index} data={infos}/>
        })
      }
    </section>
  )
}

export default Category