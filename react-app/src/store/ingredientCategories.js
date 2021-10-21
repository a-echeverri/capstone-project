const GET_CATEGORIES = "categories/LOAD";
const GET_SPECIFIC_INGREDIENT = "ingredients/GET_SPECIFIC_INGREDIENT"

const getCategoriesAction = (categories) => ({
  type: GET_CATEGORIES,
  payload: categories,
});

const getSpecificIngredientAction = (ingredients) => ({
    type: GET_SPECIFIC_INGREDIENT,
    payload: ingredients,
  });

export const getCategoriesThunk = () => async (dispatch) => {
    console.log('entered categories thunk')
  const res = await fetch("/api/ingredients/");
  console.log('fetched categories')

  if (res.ok) {
    console.log('response ok')
    let categories = await res.json();
    dispatch(getCategoriesAction(categories));
  } 

  return res;
};

export const getSpecificIngredientsThunk = (id) => async (dispatch) => {
    console.log('entered specific ingredient thunk')
     const res = await fetch(`/api/ingredients/${id}`);
    console.log('fetched specific ingredient')

  if (res.ok) {
    console.log('response ok')
    let ingredient = await res.json();
    dispatch(getSpecificIngredientAction(ingredient));
  } 

  return res;
};

const initialState = {};
export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
    case GET_CATEGORIES:
        return action.payload;
    case GET_SPECIFIC_INGREDIENT:
        return action.payload;
    default:
        return state;
    }
}
