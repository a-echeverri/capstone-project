import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { getDrinkCategoriesThunk, getCategoryDrinksThunk } from "../../store/drinkCategories";
import { updateDrinkThunk, getDrinksThunk, getSpecificDrinkThunk } from "../../store/drinks";
// import './EditDrinkForm.css'

const EditDrinkForm = () => {
  const [errors, setErrors] = useState([]);
  const drink = useSelector((state) => state.drinks?.drinks);
  const user = useSelector((state) => state.session.user);
  const categories = useSelector((store) => store.drinkCategories?.drink_categories);
  const [name, setName] = useState(drink?.name);
  const [category, setCategoryId] = useState(drink?.drink_category_id);
  const [description, setDescription] = useState(drink?.description);
  const [ingredients, setIngredients] = useState(drink?.ingredients);
  const [amount_unit, setAmount_Unit] = useState(drink?.amount_unit);
  const [instructions, setInstructions] = useState(drink?.instructions);
  const [image, setImage] = useState(drink?.image_url);
  const { drinkId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDrinkCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    console.log("id", drinkId);
    dispatch(getSpecificDrinkThunk(drinkId));
  }, [dispatch, drinkId]);

  if (!user) {
    return <Redirect to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(category);
    const updatedDrink = {
      drinkId: +drinkId,
      name,
      drink_category_id: +category,
      description,
      ingredients,
      amount_unit,
      instructions,
      image_url: image,
      user_id: user.id,
    };
    console.log("updated drink", updatedDrink);

    await dispatch(updateDrinkThunk(updatedDrink));
    history.push(`/drinks/${drink.id}`);
    // history.push(`/drinks`)
  };

  return (
    <form onSubmit={handleSubmit} className="edit-drink-form">
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
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          required={true}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          required={true}
        ></input>
      </div>
      <div>
        <label>Ingredients</label>
        <input
          type="text"
          name="ingredients"
          onChange={(e) => {
            setIngredients(e.target.value);
          }}
          value={ingredients}
        ></input>
      </div>
      <div>
        <label>Instructions</label>
        <input
          type="text"
          name="instructions"
          onChange={(e) => { setInstructions(e.target.value)}}
          value={instructions}
        ></input>
      </div>      
      <div>
        <label>Category</label>
        <select
          name="category"
          defaultValue="0"
          onChange={(e) => {
            setCategoryId(e.target.value);
          }}
        >
          {categories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Image Url</label>
        <input
          name="image"
          type="text"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
          required={true}
        ></input>
      </div>
      <button type="submit" className="submit-btn">
        Update drink
      </button>
    </form>
  );
};

export default EditDrinkForm;
