// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getCategoriesThunk } from "../../store/ingredientCategories";
// // import './CategoryList.css'

// function SpecificIngredientPage() {
//   const dispatch = useDispatch()

//   useEffect(() => {

//     dispatch(getCategoriesThunk())
//   }, [dispatch])


//   const categories = useSelector(state => state.categories.categories)
//   return(
//     <div>
//       <div className='category_nav_container'>
//         <ul className='category_nav'>
//           {categories?.map((category) => (
//             <Link key={category.id} to={`/categories/${category.id}`}><li>{category.name}</li></Link>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )


// }

// export default SpecificIngredientPage;