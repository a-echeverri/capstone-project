const GET_DRINK_CATEGORIES = "categories/GET_DRINK_CATEGORIES";
// const GET_SPECIFIC_DRINK= "drinks/GET_SPECIFIC_DRINK"

const getDrinkCategoriesAction = (categories) => ({
  type: GET_DRINK_CATEGORIES,
  payload: categories,
});

// const getSpecificDrinkAction = (drinks) => ({
//     type: GET_SPECIFIC_DRINK,
//     payload: drinks,
//   });

export const getDrinkCategoriesThunk = () => async (dispatch) => {
    console.log('entered drink categories thunk')
  const res = await fetch("/api/drinks");
  console.log('fetched drink categories')

  if (res.ok) {
    console.log('getDrinkCategoriesThunk response ok')
    let categories = await res.json();
    console.log('categories', categories)
    dispatch(getDrinkCategoriesAction(categories));
  } 

  return res;
};

// export const getSpecificDrinksThunk = (id) => async (dispatch) => {
//     console.log('entered specific drink thunk')
//      const res = await fetch(`/api/drinks/${id}`);
//     console.log('fetched specific drink')

//   if (res.ok) {
//     console.log('response ok')
//     let drink = await res.json();
//     dispatch(getSpecificDrinkAction(drink));
//   } 

//   return res;
// };

const initialState = {};
export default function drinkCategoriesReducer(state = initialState, action) {
    switch (action.type) {
    case GET_DRINK_CATEGORIES:
        return action.payload;
    // case GET_SPECIFIC_DRINK:
    //     return action.payload;
    default:
        return state;
    }
}
