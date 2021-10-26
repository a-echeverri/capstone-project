const GET_INGREDIENTS = "ingredients/GET_INGREDIENTS";
const GET_SPECIFIC_INGREDIENT = "ingredients/GET_SPECIFIC_INGREDIENT"
// const GET_INGREDIENTS_BY_CATEGORY = "ingredients/GET_INGREDIENTS_BY_CATEGORY";
const CREATE_INGREDIENTS = "ingredients/CREATE_INGREDIENTS";
const UPDATE_INGREDIENTS = "ingredients/UPDATE_INGREDIENTS";
const DELETE_INGREDIENTS = "ingredients/DELETE_INGREDIENTS";

const getIngredientsAction = (ingredients) => ({
  type: GET_INGREDIENTS,
  payload: ingredients,
});

const getSpecificIngredientAction = (ingredient) => ({
    type: GET_SPECIFIC_INGREDIENT,
    payload: ingredient
});
// const getCategoryIngredientsAction = (ingredients) => ({
//   type: GET_INGREDIENTS_BY_CATEGORY,
//   payload: ingredients,
// });

const createIngredientAction = (ingredients) => ({
  type: CREATE_INGREDIENTS,
  payload: ingredients,
});

const updateIngredientsAction = (ingredients) => ({
  type: UPDATE_INGREDIENTS,
  payload: ingredients,
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
    console.log('entered specific ingredient thunk')
     const res = await fetch(`/api/ingredients/${id}`);
    console.log('fetched specific ingredient')

  if (res.ok) {
    console.log('specific ingredient response ok')
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

export const createIngredientThunk = (ingredients) => async (dispatch) => {
  const response = await fetch("/api/ingredients/", {
    method: "POST",
    body: JSON.stringify(ingredients),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log("data", data);
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
    // case GET_INGREDIENTS_BY_CATEGORY:
    //   return action.payload;
    case GET_SPECIFIC_INGREDIENT:
        return {
            ingredient: action.payload
        };
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
