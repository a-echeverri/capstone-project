import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { getCategoriesThunk, getCategoryIngredientsThunk } from "../../store/ingredientCategories";
import { updateIngredientThunk, getIngredientsThunk, getSpecificIngredientThunk} from "../../store/ingredients";
// import './EditIngredientForm.css'

const EditIngredientForm = () => {
    const ingredient = useSelector((state) => state.ingredients?.ingredient);
    const user = useSelector((state) => state.session.user);
    const categories = useSelector(store => store.ingredientCategories?.ingredient_categories)
    const { ingredientId } = useParams();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState(ingredient?.name);
    const [description, setDescription] = useState(ingredient?.description);
    const [category, setCategoryId] = useState(ingredient?.ingredient_category_id);
    const [image, setImage] = useState(ingredient?.image_url);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getCategoriesThunk());
    }, [dispatch]);

    useEffect(() => {
        console.log("id", ingredientId);
        dispatch(getSpecificIngredientThunk(ingredientId));
    }, [dispatch, ingredientId]);

    if (!user) {
        return <Redirect to="/" />;
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log(category)
        const updatedIngredient = {
            ingredientId: +ingredientId,
            name,
            ingredient_category_id: +category,
            description,
            image_url: image,
            user_id: user.id
        }
          console.log('updated ingredient', updatedIngredient)
    
          await dispatch(updateIngredientThunk(updatedIngredient));
          history.push(`/ingredients/${ingredient.id}`)
          // history.push(`/ingredients`)
    
        }
    
    return (
        <form onSubmit={handleSubmit} className='edit-ingredient-form'>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => { setName(e.target.value)}}
              value={name}
              required={true}
            ></input>
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="description"
              onChange={(e) => { setDescription(e.target.value)}}
              value={description}
              required={true}
            ></input>
          </div>
          <div>
            <label>Category</label>
            <select
              name="category"
              onChange={(e) => { setCategoryId(e.target.value)}}
            >{categories?.map((category) => (<option key={category.id} value={category.id}>{category.name}</option>))}
            </select>
          </div>
          <div>
            <label>Image Url</label>
            <input
              name="image"
              type="text"
              onChange={(e) => { setImage(e.target.value)}}
              value={image}
              required={true}
            ></input>
          </div>
          <button type="submit" className='submit-btn'>Update ingredient</button>
        </form>
      );
};

export default EditIngredientForm;
