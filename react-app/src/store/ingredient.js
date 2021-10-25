const GET_INGREDIENTS = "ingredients/LOAD";
const GET_INGREDIENTS_BY_CATEGORY = "ingredients/GET_INGREDIENTS_BY_CATEGORY";
const CREATE_INGREDIENTS = "ingredients/CREATE_INGREDIENTS";
const DELETE_INGREDIENTS = "ingredients/DELETE_INGREDIENTS";

const getIngredientsAction = (ingredients) => ({
  type: GET_INGREDIENTS,
  payload: ingredients,
});

const getCategoryIngredientsAction = (ingredients) => ({
  type: GET_INGREDIENTS_BY_CATEGORY,
  payload: ingredients,
});

const createIngredientAction = (ingredients) => ({
  type: CREATE_INGREDIENTS,
  payload: ingredients,
});

export const getIngredientsThunk = () => async (dispatch) => {
  console.log("entered ingredients thunk");
  const res = await fetch("/api/ingredient-category/");
  console.log("fetched ingredients");

  if (res.ok) {
    console.log("ingredients response ok");
    let ingredients = await res.json();
    dispatch(getIngredientsAction(ingredients));
  }

  return res;
};

export const getCategoryIngredientsThunk = (id) => async (dispatch) => {
  console.log("entered category ingredients thunk");
  const res = await fetch(`/api/ingredient-category/${id}/`);
  console.log("fetched category ingredients");

  if (res.ok) {
    console.log("ingredients response ok");
    let ingredients = await res.json();
    dispatch(getCategoryIngredientsAction(ingredients));
  }

  return res;
};

export const createIngredientThunk = (ingredient) => async (dispatch) => {
  const response = await fetch("/api/ingredients/", {
    method: "POST",
    body: JSON.stringify(ingredient),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(createIngredientAction(data));
    return data;
  }
};

export const deleteIngredientThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/ingredients/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      const project = await response.json();
      dispatch(getIngredientsAction(id));
      return project;
    }
  };

const initialState = {};
export default function ingredientsReducer(state = initialState, action) {
    const newState = {...state}
    switch (action.type) {
    case GET_INGREDIENTS:
      return action.payload;
    case GET_INGREDIENTS_BY_CATEGORY:
      return action.payload;
    case CREATE_INGREDIENTS:
        return {
            newState,
            ingredients: action.payload,
        }
    case DELETE_INGREDIENTS:
        return {
            newState,
            ingredients: action.payload
        }
    default:
      return state;
  }
}
