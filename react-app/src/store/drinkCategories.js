const GET_CATEGORIES = "categories/LOAD";
const GET_SPECIFIC_DRINK= "drinks/GET_SPECIFIC_DRINK"

const getCategoriesAction = (categories) => ({
  type: GET_CATEGORIES,
  payload: categories,
});

const getSpecificDrinkAction = (drinks) => ({
    type: GET_SPECIFIC_DRINK,
    payload: drinks,
  });

export const getCategoriesThunk = () => async (dispatch) => {
    console.log('entered categories thunk')
  const res = await fetch("/api/drinks/");
  console.log('fetched categories')

  if (res.ok) {
    console.log('response ok')
    let categories = await res.json();
    dispatch(getCategoriesAction(categories));
  } 

  return res;
};

export const getSpecificDrinksThunk = (id) => async (dispatch) => {
    console.log('entered specific drink thunk')
     const res = await fetch(`/api/drinks/${id}/`);
    console.log('fetched specific drink')

  if (res.ok) {
    console.log('response ok')
    let drink = await res.json();
    dispatch(getSpecificDrinkAction(drink));
  } 

  return res;
};

const initialState = {};
export default function drinkCategoriesReducer(state = initialState, action) {
    switch (action.type) {
    case GET_CATEGORIES:
        return action.payload;
    case GET_SPECIFIC_DRINK:
        return action.payload;
    default:
        return state;
    }
}
