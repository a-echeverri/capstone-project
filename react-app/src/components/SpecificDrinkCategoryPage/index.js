import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams, Link } from "react-router-dom";
// import { getCategoriesThunk } from "../../store/drinkCategories";
import { getDrinksThunk, getCategoryDrinksThunk } from '../../store/drink'
// import './CategoryList.css'

function SpecificDrinkCategoryPage() {
  const dispatch = useDispatch()
  const { id } = useParams();
  console.log('specific dispatched')

  useEffect(() => {
  console.log('specific category entered useEffect')

    dispatch(getCategoryDrinksThunk(id))
  }, [dispatch, id])

  useEffect(() => {
    console.log('specific drink entered useEffect')
  
      dispatch(getDrinksThunk())
    }, [dispatch])

//   console.log(state)
  const drinks = useSelector(state => state.drinks.drinks)
  console.log('drinks', drinks)
 
  return(
      <>
    <div>
      <div className='category_nav_container'>
        {/* {console.log(drinks.name)} */}
        <ul className='category_nav'>
          {drinks?.map((drink) => (
            <>
            <img key={drink.image_url} src={drink.image_url} alt=''/>
            <Link key={drink.id} to={`/drinks/${drink.id}`}><li>{drink.name}</li></Link>
            </>
          ))}
        </ul>
      </div>
    </div>
    </>
  )


}

export default SpecificDrinkCategoryPage;