const GET_INGREDIENTS = "ingredients/LOAD";
const GET_INGREDIENTS_BY_CATEGORY = 'ingredients/GET_INGREDIENTS_BY_CATEGORY'

const getIngredientsAction = (ingredients) => ({
  type: GET_INGREDIENTS,
  payload: ingredients,
});

const getCategoryIngredientsAction = (ingredients) => ({
    type: GET_INGREDIENTS_BY_CATEGORY,
    payload: ingredients,
})

export const getIngredientsThunk = () => async (dispatch) => {
    console.log('entered ingredients thunk')
  const res = await fetch("/api/ingredient-category/");
  console.log('fetched ingredients')

  if (res.ok) {
    console.log('ingredients response ok')
    let ingredients = await res.json();
    dispatch(getIngredientsAction(ingredients));
  } 

  return res;
};

export const getCategoryIngredientsThunk = (id) => async (dispatch) => {
    console.log('entered category ingredients thunk')
  const res = await fetch(`/api/ingredient-category/${id}`);
  console.log('fetched category ingredients')

  if (res.ok) {
    console.log('ingredients response ok')
    let ingredients = await res.json();
    dispatch(getCategoryIngredientsAction(ingredients));
  } 

  return res;
};

const initialState = {};
export default function ingredientsReducer(state = initialState, action) {
    switch (action.type) {
    case GET_INGREDIENTS:
        return action.payload;
    case GET_INGREDIENTS_BY_CATEGORY:
        return action.payload;
    default:
        return state;
    }
}
