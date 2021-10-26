import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getSpecificIngredientThunk } from "../../store/ingredients";
import { getCategoriesThunk } from "../../store/ingredientCategories";
// import './CategoryList.css'

function SpecificIngredientPage() {
  const dispatch = useDispatch()
  const { id } = useParams();
  console.log('id', id)
  const ingredients = useSelector((store) => store.ingredients?.ingredients)
  console.log(ingredients)

  useEffect(() => {
    console.log('specific ing useEffect')
    dispatch(getSpecificIngredientThunk(id))
    console.log('id', id)
  }, [dispatch, id])


//   const categories = useSelector(state => state.categories.ingredient_categories)
  return(
    <div>
      <div className='ingredient_nav_container'>
          {console.log('rendered specific ingredient')}
          <div className='ingredient-content-container'>
          <div className='ingredient-page-title'>
            <h2>{ingredients?.name}</h2>
            {console.log(ingredients?.name)}
          </div>
          <div className='ingredient-image-container'>
            <img className='ingredient-image' src={ingredients?.image_url} alt="" />
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