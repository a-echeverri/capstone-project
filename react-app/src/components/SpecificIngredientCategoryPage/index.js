import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams, Link } from "react-router-dom";
import { getCategoriesThunk } from "../../store/ingredientCategories";
import { getCategoryIngredientsThunk } from "../../store/ingredientCategories";
import { getIngredientsThunk } from '../../store/ingredients'
// import {  getCategoryIngredientsThunk } from '../../store/ingredient'

function SpecificIngredientCategoryPage() {
  const dispatch = useDispatch()
  const { id } = useParams();
  console.log('specific ingcat dispatched')
  console.log('id', id)

  useEffect(() => {
  console.log('specific category entered useEffect')
  console.log('id', id)
    dispatch(getCategoryIngredientsThunk(id))
  }, [dispatch, id])

  // useEffect(() => {
  //   console.log('specific ingredient entered  useEffect')
  
  //     dispatch(getIngredientsThunk())
  //   }, [dispatch])

//   console.log(state)
  const categories = useSelector(state => state.ingredientCategories.ingredient_categories)
  const ingredients = useSelector(state => state.ingredients?.ingredients)
  console.log('ingredients', ingredients)
 
  return(
      <>
    <div>
      <div className='category_nav_container'>
        {/* {console.log(ingredients.name)} */}
        <ul className='category_nav'>
          {ingredients?.map((ingredient) => (
            <>
            <img key={ingredient.image_url} src={ingredient.image_url} alt=''/>
            <Link key={ingredient.id} to={`/ingredients/${ingredient.id}`}><li>{ingredient.name}</li></Link>
            </>
          ))}
        </ul>
      </div>
    </div>
    </>
  )


}

export default SpecificIngredientCategoryPage;