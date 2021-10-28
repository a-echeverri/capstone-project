const GET_INGREDIENTS = "ingredients/GET_INGREDIENTS";
const GET_SPECIFIC_INGREDIENT = "ingredients/GET_SPECIFIC_INGREDIENT";
// const GET_INGREDIENTS_BY_CATEGORY = "ingredients/GET_INGREDIENTS_BY_CATEGORY";
const CREATE_INGREDIENT = "ingredients/CREATE_INGREDIENT";
const UPDATE_INGREDIENT = "ingredients/UPDATE_INGREDIENT";
const DELETE_INGREDIENT = "ingredients/DELETE_INGREDIENT";

const getIngredientsAction = (ingredients) => ({
  type: GET_INGREDIENTS,
  payload: ingredients,
});

const getSpecificIngredientAction = (ingredient) => ({
  type: GET_SPECIFIC_INGREDIENT,
  payload: ingredient,
});
// const getCategoryIngredientsAction = (ingredients) => ({
//   type: GET_INGREDIENTS_BY_CATEGORY,
//   payload: ingredients,
// });

const createIngredientAction = (ingredient) => ({
  type: CREATE_INGREDIENT,
  payload: ingredient,
});

const updateIngredientAction = (ingredient) => ({
  type: UPDATE_INGREDIENT,
  payload: ingredient,
});

// export const getCategoriesThunk = () => async (dispatch) => {
//     console.log('entered categories thunk')
//   const res = await fetch("/api/ingredients/");
//   console.log('fetched categories')

//   if (res.ok) {
//     console.log('response ok')
//     let categories = await res.json();
//     dispatch(getCategoriesAction(categories));
//   }

//   return res;
// };

export const getIngredientsThunk = () => async (dispatch) => {
  console.log("entered ingredients thunk");
  const res = await fetch("/api/ingredients");
  console.log("fetched ingredients");

  if (res.ok) {
    console.log("ingredients response ok");
    let ingredients = await res.json();
    dispatch(getIngredientsAction(ingredients));
  }

  return res;
};

export const getSpecificIngredientThunk = (id) => async (dispatch) => {
  console.log("entered specific ingredient thunk");
  const res = await fetch(`/api/ingredients/${id}`);
  console.log("fetched specific ingredient");

  if (res.ok) {
    console.log("specific ingredient response ok");
    let ingredient = await res.json();
    dispatch(getSpecificIngredientAction(ingredient));
  }

  return res;
};

// export const getCategoryIngredientsThunk = (id) => async (dispatch) => {
//   console.log("entered category ingredients thunk ingcat");
//   const res = await fetch(`/api/ingredient-category/${id}`);
//   console.log("fetched category ingredients api");

//   if (res.ok) {
//     console.log("ingredients response ok in store");
//     let ingredients = await res.json();
//     console.log("ingredients response", ingredients);
//     dispatch(getCategoryIngredientsAction(ingredients));
//   }

//   return res;
// };

export const createIngredientThunk = (ingredient) => async (dispatch) => {
  const response = await fetch("/api/ingredients", {
    method: "POST",
    body: JSON.stringify(ingredient),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log("create thunk data", data);
    if (data.errors) {
      return data.errors;
    }

    dispatch(createIngredientAction(data));
    return data;
  }
};

export const updateIngredientThunk = (ingredient) => async (dispatch) => {
    console.log("entered update ingredient thunk");
    console.log("ingredient in thunk", ingredient);
    const response = await fetch(`/api/ingredients/${ingredient.ingredientId}`, {
        method: "PUT",
        body: JSON.stringify(ingredient),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        const updatedIngredient = await response.json();
        console.log("updated ingredient", updatedIngredient);
        dispatch(updateIngredientAction(updatedIngredient));
        return updatedIngredient;
    }
};

export const deleteIngredientThunk = (id) => async (dispatch) => {
  const response = await fetch(`/api/ingredients/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  console.log('id', id)
  console.log('response', response)

  if (response.ok) {
    const project = await response.json();
    dispatch(getIngredientsAction(id));
    return project;
  }
};

const initialState = {};
export default function ingredientsReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case GET_INGREDIENTS:
      return action.payload;
    // case GET_INGREDIENTS_BY_CATEGORY:
    //   return action.payload;
    case GET_SPECIFIC_INGREDIENT:
      return {
        ingredient: action.payload,
      };
    case CREATE_INGREDIENT:
      return {
        newState,
        ingredient: action.payload,
      };
    case UPDATE_INGREDIENT:
        return {
            newState,
            ingredient: action.payload,
        };
    case DELETE_INGREDIENT:
      return {
        newState,
        ingredient: action.payload,
      };
    default:
      return state;
  }
}
