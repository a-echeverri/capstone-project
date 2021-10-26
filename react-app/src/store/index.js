import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ingredientsReducer from './ingredients';
import ingredientCategoriesReducer from './ingredientCategories';
import drinksReducer from './drinks';
import drinkCategoriesReducer from './drinkCategories';
import session from './session'

const rootReducer = combineReducers({
  session,
  ingredients:ingredientsReducer,
  ingredientCategories:ingredientCategoriesReducer,
  drinks:drinksReducer,
  drinkCategories:drinkCategoriesReducer

});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
