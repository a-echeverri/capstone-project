import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrinkCategoriesThunk } from "../../store/drinkCategories";
import './DrinkCategoriesPage.css'

function DrinkCategoriesPage() {
  const dispatch = useDispatch()
    
  useEffect(() => {
    
    dispatch(getDrinkCategoriesThunk())
  }, [dispatch])


    const categories = useSelector(state => state.drinkCategories.drink_categories)

  return(
    <div>
      <div className='category_nav_container'>
        <div className='category_header'>
          <h1>Drinks</h1>
          <p>The Cocktail Party app contains hundreds of kitchen-tested, guaranteed-delicious cocktail recipes sourced from historic bar manuals and up-and-coming mixologists, along with perfected recipes for classic cocktails.</p>
        </div>
        <div className='category_nav'>
          {categories?.map((category) => (
            <a key={category?.name.toString()} href={`/drink-category/${category?.id}`}>
            <img src={category.image_url} alt=''/>
              <h4>{category.name}</h4>
            </a>
          ))}
        </div>
      </div>
    </div>
  )


}

export default DrinkCategoriesPage;