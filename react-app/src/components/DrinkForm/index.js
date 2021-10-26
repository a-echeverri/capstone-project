import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDrinkCategoriesThunk } from "../../store/drinkCategories";
import { createDrinkThunk, getCategoryDrinksThunk, getDrinksThunk} from "../../store/drinks";
import './DrinkForm.css'

const DrinkForm = () => {
  const [errors] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [image, setImage] = useState("")
  const user = useSelector((state) => state.session.user);
  const categories = useSelector(store => store.categories.categories)
  const dispatch = useDispatch();
  const history = useHistory();

  console.log('dispatched')

  useEffect(() => {
      dispatch(getDrinkCategoriesThunk())
  }, [dispatch])

  useEffect(() => {
      dispatch(getDrinksThunk())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCategoryDrinksThunk())
}, [dispatch])

  if (!user) {
    // return <Redirect to="/login" />;
    // return <LoginForm />
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

      const newDrink = {
        name,
        description,
        image_url: image,
        user_id: user.id,
        categories_id: categoryId,
      }
      const lastDrink = await dispatch(createDrinkThunk(newDrink));
      history.push(`/drinks/${lastDrink.id}`)
    }

return (
    <form onSubmit={handleSubmit} className='drinkForm'>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
          {console.log('form rendered')}
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
          required={true}
        ></input>
      </div>
      <button type="submit" className='submit-btn'>Create drink</button>
    </form>
  );
};

export default DrinkForm;
