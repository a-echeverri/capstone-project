import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getSpecificIngredientThunk, deleteIngredientThunk } from "../../store/ingredients";
import { getCategoriesThunk } from "../../store/ingredientCategories";
// import './CategoryList.css'

function SpecificIngredientPage() {
  
  const dispatch = useDispatch()
  const history = useHistory()
  const { ingredientId } = useParams();
  const user = useSelector(state => state.session.user)
  const ingredients = useSelector((state) => state.ingredients?.ingredient)
  const categories = useSelector(store => store.ingredientCategories?.ingredient_categories)
  console.log('ingredients', ingredients)

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    console.log('specific ingredient useEffect')
    dispatch(getSpecificIngredientThunk(ingredientId))
  }, [dispatch, ingredientId])

  const handleDelete = (ingredientId) => {
    dispatch(deleteIngredientThunk(ingredientId))
    history.push('/ingredient-category')
  }

  function EditDeleteIngredient() {
    if (user && ingredients?.user_id === user?.id) {
      return (
        <div className='edit-delete-ingredient-container'>
          <Link to={`/ingredients/${ingredientId}/edit`}>
            <button className="edit-button">Edit Ingredient</button>
          </Link>
          <button className="delete-button" onClick={() => handleDelete(ingredientId)}>Delete Ingredient</button>
        </div>
      )
    }
    return null;
  }


//   const categories = useSelector(state => state.categories.ingredient_categories)
  return(
    <div>
      <div className='ingredient_nav_container'>
          {console.log('ingredients.name', ingredients?.ingredient_category_id)}
          <div className='ingredient-content-container'>
          <div className='ingredient-page-title'>
            <h2>{ingredients?.name}</h2>
          </div>
          <div className='ingredient-image-container'>
            <img className='ingredient-image' src={ingredients?.image_url} alt="" />
          </div>
          <div className='ingredient-category-container'>
            <h4>{categories?.category}</h4>
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
      <div className='ingredient-page-container'>
        <EditDeleteIngredient />
      </div>
    </div>
  )
}

export default SpecificIngredientPage;