import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getCategoriesThunk, getCategoryIngredientsThunk } from "../../store/ingredientCategories";
import { createIngredientThunk, getIngredientsThunk} from "../../store/ingredients";
import './IngredientForm.css'

const IngredientForm = () => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategoryId] = useState(null);
  const [image, setImage] = useState("")
  const user = useSelector((state) => state.session.user);
  const categories = useSelector(store => store.ingredientCategories?.ingredient_categories)
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();


  // console.log('categories', categories)

  useEffect(() => {
      dispatch(getCategoriesThunk())
      console.log('get categories thunk in form')

  }, [dispatch])
 
  if (!user) {
    // return <Redirect to="/login" />;
    // return <LoginForm />
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

      console.log('category', category)
      const newIngredient = {
        name: name,
        ingredient_category_id: +category,
        description: description,
        image_url: image,
        user_id: user.id
      }
      console.log('new ingredient', newIngredient)
      setErrors([]);
      const data = await dispatch(createIngredientThunk(newIngredient));
      console.log('last ingredient', data);
      if (data){
      history.push(`/ingredients/${data.id}`)
      }
      // history.push(`/ingredients`)

    }

return (
    <form onSubmit={handleSubmit} className='ingredientForm'>
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
        ></input>
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => { setDescription(e.target.value)}}
          value={description}
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
          // required={true}
        ></input>
      </div>
      <button type="submit" className='submit-btn'>Create ingredient</button>
    </form>
  );
};

export default IngredientForm;
