const GET_CATEGORIES = "categories/GET_CATEGORIES";
// const GET_SPECIFIC_INGREDIENT = "categories/GET_SPECIFIC_INGREDIENT"
const GET_INGREDIENTS_BY_CATEGORY = "categories/GET_INGREDIENTS_BY_CATEGORY";


const getCategoriesAction = (categories) => ({
  type: GET_CATEGORIES,
  payload: categories,
});

// const getSpecificIngredientAction = (ingredients) => ({
//     type: GET_SPECIFIC_INGREDIENT,
//     payload: ingredients,
//   });

const getCategoryIngredientsAction = (ingredients) => ({
    type: GET_INGREDIENTS_BY_CATEGORY,
    payload: ingredients,
  });

export const getCategoriesThunk = () => async (dispatch) => {
    console.log('entered get categories thunk')
  const res = await fetch("/api/ingredient-category");
  console.log('fetched categories')

  if (res.ok) {
    console.log('response ok')
    let categories = await res.json();
    console.log(categories)
    dispatch(getCategoriesAction(categories));
  } 

  return res;
};

// export const getSpecificIngredientsThunk = (id) => async (dispatch) => {
//     console.log('entered specific ingredient thunk')
//      const res = await fetch(`/api/ingredients/${id}/`);
//     console.log('fetched specific ingredient')

//   if (res.ok) {
//     console.log('response ok')
//     let ingredient = await res.json();
//     dispatch(getSpecificIngredientAction(ingredient));
//   } 

//   return res;
// };

export const getCategoryIngredientsThunk = (id) => async (dispatch) => {
    console.log("entered category ingredients thunk");
    const res = await fetch(`/api/ingredient-category/${id}`);
    console.log("fetched category ingredients api");
    console.log('res', res)
    if (res.ok) {
      console.log("ingredients response ok in store");
      let ingredients = await res.json();
      console.log("ingredients response", ingredients);
      dispatch(getCategoryIngredientsAction(ingredients));
    }
  
    return res;
  };

const initialState = {};
export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
    case GET_CATEGORIES:
        return action.payload;
    // case GET_SPECIFIC_INGREDIENT:
    //     return action.payload;
    case GET_INGREDIENTS_BY_CATEGORY:
        return action.payload;
    default:
        return state;
    }
}
