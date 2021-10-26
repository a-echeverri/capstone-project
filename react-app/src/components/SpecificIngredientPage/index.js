import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getSpecificIngredientThunk } from "../../store/ingredients";
import { getCategoriesThunk } from "../../store/ingredientCategories";
// import './CategoryList.css'

function SpecificIngredientPage() {
  const dispatch = useDispatch()
  const { ingredientId } = useParams();
  console.log('id', ingredientId)
  const ingredients = useSelector((state) => state.ingredients.ingredient)
  console.log('ingredients', ingredients)

  useEffect(() => {
    console.log('specific ing useEffect')
    dispatch(getSpecificIngredientThunk(ingredientId))
    console.log('id', ingredientId)
  }, [dispatch, ingredientId])


//   const categories = useSelector(state => state.categories.ingredient_categories)
  return(
    <div>
      <div className='ingredient_nav_container'>
          {console.log('ingredients.name', ingredients?.name)}
          <div className='ingredient-content-container'>
          <div className='ingredient-page-title'>
            <h2>{ingredients?.name}</h2>
          </div>
          <div className='ingredient-image-container'>
            <img className='ingredient-image' src={ingredients?.image_url} alt="" />
          </div>
          <div>
            <h4 className="ingredient-description">{ingredients?.description}</h4>
        </div>
          </div>
        {/* <ul className='category_nav'>
          {categories?.map((category) => (
            <Link key={category.id} to={`/categories/${category.id}`}><li>{category.name}</li></Link>
          ))}
        </ul> */}
      </div>
    </div>
  )


}

export default SpecificIngredientPage;