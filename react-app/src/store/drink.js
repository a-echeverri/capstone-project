const GET_DRINKS = "drinks/LOAD";
const GET_DRINKS_BY_CATEGORY = 'drinks/GET_DRINKS_BY_CATEGORY';
const CREATE_DRINK = 'drinks/CREATE_DRINK';
const DELETE_DRINK = 'drinks/DELETE_DRINK';

const getDrinksAction = (drinks) => ({
  type: GET_DRINKS,
  payload: drinks,
});

const getCategoryDrinksAction = (drinks) => ({
    type: GET_DRINKS_BY_CATEGORY,
    payload: drinks,
});

const createDrinkAction = (drink) => ({
    type: CREATE_DRINK,
    payload: drink,
  });

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

export const createDrinkThunk = (drink) => async (dispatch) => {
    const response = await fetch("/api/drinks/", {
      method: "POST",
      body: JSON.stringify(drink),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return;
      }
  
      dispatch(createDrinkAction(data));
      return data;
    }
  };
  
  export const deleteDrinkThunk = (id) => async (dispatch) => {
      const response = await fetch(`/api/drinks/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    
      if (response.ok) {
        const project = await response.json();
        dispatch(getDrinksAction(id));
        return project;
      }
    };

const initialState = {};
export default function drinksReducer(state = initialState, action) {
    const newState = {...state}
    switch (action.type) {
    case GET_DRINKS:
        return action.payload;
    case GET_DRINKS_BY_CATEGORY:
        return action.payload;
    case CREATE_DRINK:
        return {
            newState,
            drink: action.payload,
        }
    case DELETE_DRINK:
        return {
            newState,
            drink: action.payload
        }
    default:
        return state;
    }
}
