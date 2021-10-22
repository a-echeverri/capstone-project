const GET_DRINKS = "drinks/LOAD";
const GET_DRINKS_BY_CATEGORY = 'drinks/GET_DRINKS_BY_CATEGORY'

const getDrinksAction = (drinks) => ({
  type: GET_DRINKS,
  payload: drinks,
});

const getCategoryDrinksAction = (drinks) => ({
    type: GET_DRINKS_BY_CATEGORY,
    payload: drinks,
})

export const getDrinksThunk = () => async (dispatch) => {
    console.log('entered drinks thunk')
  const res = await fetch("/api/drink-category/");
  console.log('fetched drinks')

  if (res.ok) {
    console.log('drinks response ok')
    let drinks = await res.json();
    dispatch(getDrinksAction(drinks));
  } 

  return res;
};

export const getCategoryDrinksThunk = (id) => async (dispatch) => {
    console.log('entered category drinks thunk')
  const res = await fetch(`/api/drink-category/${id}/`);
  console.log('fetched category drinks')

  if (res.ok) {
    console.log('drinks response ok')
    let drinks = await res.json();
    dispatch(getCategoryDrinksAction(drinks));
  } 

  return res;
};

const initialState = {};
export default function drinksReducer(state = initialState, action) {
    switch (action.type) {
    case GET_DRINKS:
        return action.payload;
    case GET_DRINKS_BY_CATEGORY:
        return action.payload;
    default:
        return state;
    }
}
