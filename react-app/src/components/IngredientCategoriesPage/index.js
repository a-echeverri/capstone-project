import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk } from "../../store/ingredientCategories";
import './IngredientCategoriesPage.css'

function IngredientCategoriesPage() {
  const dispatch = useDispatch()
    
  useEffect(() => {
    
    dispatch(getCategoriesThunk())
  }, [dispatch])


    const categories = useSelector(state => state.ingredientCategories.ingredient_categories)

  return(
    <div>
      <div className='category_nav_container'>
        <div className='category_header'>
          <h1>Ingredients</h1>
          <p>The Cocktail Party app helps you find drinks you can make from the stuff you've got around the house — everything from fancy eau-de-vie to everyday pantry staples.</p>
        </div>
        <div className='category_nav'>
          {categories?.map((category) => (
            <a key={category?.name.toString()} href={`/ingredient-category/${category?.id}`}><img src={category.image_url} alt=''/><h4>{category.name}</h4></a>
          ))}
        </div>
      </div>
    </div>
  )


}

export default IngredientCategoriesPage;