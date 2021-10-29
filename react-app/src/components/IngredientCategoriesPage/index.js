import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoriesThunk } from "../../store/ingredientCategories";
import './IngredientCategoriesPage.css'
function IngredientCategoriesPage() {
  const dispatch = useDispatch()
    console.log('dispatched')
  useEffect(() => {
    console.log('entered useEffect')
    dispatch(getCategoriesThunk())
  }, [dispatch])


//   console.log('inside useSelector', state.categories.ingredient_categories)
    const categories = useSelector(state => state.ingredientCategories.ingredient_categories)
    // console.log('ingredientcategories: categories', categories)
    // const images = useSelector(state => state.categories.ingredient_categories)
    // console.log('images', images)
  return(
    <div>
      <div className='category_nav_container'>
        <ul className='category_nav'>
          {categories?.map((category) => (
            <>
            <img key={category.image_url} src={category.image_url} alt=''/>
            <Link key={category?.id} to={`/ingredient-category/${category?.id}`}><li key={category.id}>{category.name}</li></Link>
            </>
          ))}
        </ul>
        {/* <div>
            {categories?.map((category) => (
            <img key={category.id} src={category.image_url} alt=''/>
            ))}
        </div> */}
      </div>
    </div>
  )


}

export default IngredientCategoriesPage;