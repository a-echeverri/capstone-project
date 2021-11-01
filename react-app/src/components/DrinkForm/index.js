import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getDrinkCategoriesThunk } from "../../store/drinkCategories";
import { createDrinkThunk} from "../../store/drinks";
import './DrinkForm.css'

const DrinkForm = () => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategoryId] = useState(1);
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [amount_unit, setAmount_Unit] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.session.user);
  const categories = useSelector(store => store.drinkCategories?.drink_categories);
  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {
      dispatch(getDrinkCategoriesThunk())
  }, [dispatch])

  // useEffect(() => {
  //     dispatch(getDrinksThunk())
  // }, [dispatch])

//   useEffect(() => {
//     dispatch(getCategoryDrinksThunk())
// }, [dispatch])

  if (!user) {
    // return <Redirect to="/login" />;
    // return <LoginForm />
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!name) {
      setErrors(["Name is required"]);
    }

    const newDrink = {
      name,
      drink_category_id: +category,
      description,
      ingredients,
      amount_unit,
      instructions,
      image_url: image,
      user_id: user.id,
    }
    console.log('new drink', newDrink);

   
    const data = await dispatch(createDrinkThunk(newDrink));
    if (data){
      return history.push(`/drinks/${data.id}`)
    }
    else {
      setErrors(['Drink already exists']);
      
    // history.push(`/drinks`)
    }

  };

return (
    <form onSubmit={handleSubmit} className='drinkForm'>
      <div className='errors'>
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
          required
        ></input>
      </div>
      <div>
        <label>Ingredients</label>
        <input
          type="text"
          name="ingredients"
          onChange={(e) => { setIngredients(e.target.value)}}
          value={ingredients}
          required
        ></input>
      </div>
      <div>
        <label>Instructions</label>
        <input
          type="text"
          name="instructions"
          onChange={(e) => { setInstructions(e.target.value)}}
          value={instructions}
          required
        ></input>
      </div>
      <div>
        <label>Category</label>
        <select
          name="category"
          defaultValue="1"
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
