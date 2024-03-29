import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import LoginForm from './components/auth/LoginForm';
// import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import IngredientCategoriesPage from './components/IngredientCategoriesPage';
import SpecificIngredientCategoryPage from './components/SpecificIngredientCategoryPage'
import SpecificIngredientPage from './components/SpecificIngredientPage';
import DrinkCategoriesPage from './components/DrinkCategoriesPage';
import IngredientForm from './components/IngredientForm';
import EditIngredientForm from './components/EditIngredientForm';
import DrinkForm from './components/DrinkForm';
import EditDrinkForm from './components/EditDrinkForm';
import SpecificDrinkCategoryPage from './components/SpecificDrinkCategoryPage'
import SpecificDrinkPage from './components/SpecificDrinkPage';
import { authenticate } from './store/session';
import DrinkCard from './components/DrinkCard';
import HomePage from './components/HomePage';
import AboutFooter from './components/AboutFooter';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          <HomePage />
          <AboutFooter />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/drinks' exact={true} >
          <DrinkCard />
        </ProtectedRoute>
        <ProtectedRoute path='/drinks/new' exact ={true}>
          <DrinkForm />
        </ProtectedRoute>
        <ProtectedRoute path='/drinks/:drinkId/edit' exact={true}>
          <EditDrinkForm />
        </ProtectedRoute>
        <Route path='/drinks/:drinkId' exact={true}>
          <SpecificDrinkPage />
        </Route>
        <Route path='/drinks' exact={true}>
          <DrinkCategoriesPage />
        </Route>
        <Route path='/drink-category/:categoryId' exact={true}>
          <SpecificDrinkCategoryPage />
        </Route>
        <ProtectedRoute path='/ingredients/new' exact={true}>
          <IngredientForm />
        </ProtectedRoute>
        <ProtectedRoute path='/ingredients/:ingredientId/edit' exact={true}>
          <EditIngredientForm />
        </ProtectedRoute>
        <Route path='/ingredients/:ingredientId' exact={true}>
          <SpecificIngredientPage />
        </Route>
        <Route path='/ingredient-category' exact={true}>
          <IngredientCategoriesPage />
        </Route>
        <Route path='/ingredient-category/:categoryId' exact={true}>
          <SpecificIngredientCategoryPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
