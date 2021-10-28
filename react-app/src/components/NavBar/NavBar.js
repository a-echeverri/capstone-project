import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to='/drinks' exact={true} activeClassName='active'>
            Drinks
          </NavLink>
        </li>
        <li>
          <NavLink to='/ingredient-category' exact={true} activeClassName='active'>
            Ingredients
          </NavLink>
        </li>        
        <li>
          <NavLink to='/drinks/new' exact={true} activeClassName='active'>
            Add Drink
          </NavLink>
        </li>
        <li>
          <NavLink to='/ingredients/new' exact={true} activeClassName='active'>
            Add Ingredient
          </NavLink>
        </li>        
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
