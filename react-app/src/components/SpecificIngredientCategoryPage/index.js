import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams, Link } from "react-router-dom";
import { getCategoriesThunk } from "../../store/ingredientCategories";
import { getCategoryIngredientsThunk } from "../../store/ingredientCategories";
import { getIngredientsThunk } from '../../store/ingredients'
// import {  getCategoryIngredientsThunk } from '../../store/ingredient'
import './SpecificIngredientCategoryPage.css'

function SpecificIngredientCategoryPage() {
  const dispatch = useDispatch()
  const { categoryId } = useParams();
  console.log('specific ingredient category entered')

  useEffect(() => {
  console.log('specific category entered useEffect')
  console.log('categoryId', categoryId)
    dispatch(getCategoryIngredientsThunk(categoryId))
    // dispatch(getCategoriesThunk())
  }, [dispatch, categoryId])

  // useEffect(() => {
  //   dispatch(getCategoriesThunk())
  // }, [dispatch])

  // useEffect(() => {
  //   console.log('specific ingredient entered  useEffect')
  
  //     dispatch(getIngredientsThunk())
  //   }, [dispatch])

//   console.log(state)
  // const categories = useSelector(state => state.ingredientCategories.ingredient_categories)
  // const ingredients = useSelector(state => state.ingredients.ingredients?.ingredients)
  const ingredients = useSelector(state => state.ingredientCategories.ingredients?.ingredients)
  const categories = useSelector(store => store.ingredientCategories?.ingredient_categories)

  console.log('ingredients', ingredients)
  console.log('categories', categories)
 
  return(
    <div>
      <div className='ingredient_category_nav_container'>
        <div className='ingredient_category_header'>
          <a href={`/ingredient-category`} className="back-link">← Return to Ingredients</a>
          <h1 className='ingredients-header'>Ingredient</h1> 
        </div>
        <div className='ingredient_category_nav'>
  
          {ingredients?.map((ingredient) => (
            <a className='ingredient_a' key={ingredient?.id.toString()} href={`/ingredients/${ingredient.id}`}>
              <img key={ingredient.image_url} src={ingredient.image_url} alt=''/>
              <h4 className='ingredient-name'>{ingredient.name}</h4>
            </a> 
          ))}
        
        </div>
      </div>
    </div>
  )


}

export default SpecificIngredientCategoryPage;