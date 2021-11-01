import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams, Link } from "react-router-dom";
// import { getCategoriesThunk } from "../../store/drinkCategories";
import { getDrinksThunk, getCategoryDrinksThunk } from '../../store/drinks'
import './SpecificDrinkCategoryPage.css'

function SpecificDrinkCategoryPage() {
  const dispatch = useDispatch()
  const { categoryId } = useParams();
  console.log('specific drink category entered')

  useEffect(() => {
  console.log('specific category entered useEffect')

    dispatch(getCategoryDrinksThunk(categoryId))
    console.log('categoryId', categoryId)
  }, [dispatch, categoryId])

  // useEffect(() => {
  //   console.log('specific drink entered useEffect')
  
  //     dispatch(getDrinksThunk())
  //   }, [dispatch])

//   console.log(state)
  const drinks = useSelector(state => state.drinks.drinks?.drinks)
  console.log('drinks', drinks)
 
  return(
    <div>
      <div className='drink-category-nav-container'>
        <div className='drink_category_header'>
          <a href={`/drinks`} className="back-link">← Return to Drinks</a>
          <h1 className='drinks-header'>Drinks</h1>
        </div>
        <div className='drink_category_nav'>
          {drinks?.map((drink) => (
            <a key={drink.id} href={`/drinks/${drink.id}`}>
              <img key={drink.image_url} src={drink.image_url} alt=''/>
              <h4>{drink.name}</h4>
            </a>
          ))}
        </div>
    </div>
   </div>
  )


}

export default SpecificDrinkCategoryPage;