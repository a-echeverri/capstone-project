import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoriesThunk } from "../../store/drinkCategories";
// import './CategoryList.css'

function DrinkCategoriesPage() {
  const dispatch = useDispatch()
    console.log('dispatched')
  useEffect(() => {
    console.log('entered useEffect')
    dispatch(getCategoriesThunk())
  }, [dispatch])


//   console.log('inside useSelector', state.categories.drink_categories)
    const categories = useSelector(state => state.drinks)
    console.log('categories', categories)
    // const images = useSelector(state => state.categories.drink_categories)
    // console.log('images', images)
  return(
    <div>
      <div className='category_nav_container'>
        {/* <ul className='category_nav'>
          {categories?.map((category) => (
            <>
            <img key={category.image_url} src={category.image_url} alt=''/>
            <Link key={category.id} to={`/drink-category/${category.id}`}><li>{category.name}</li></Link>
            </>
          ))}
        </ul> */}
        {/* <div>
            {categories?.map((category) => (
            <img key={category.id} src={category.image_url} alt=''/>
            ))}
        </div> */}
      </div>
    </div>
  )


}

export default DrinkCategoriesPage;