
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
          <NavLink to='/ingredients' exact={true} activeClassName='active'>
            Ingredients
          </NavLink>
        </li>
        {/* <li>
          <NavLink to='/ingredients-category/' exact={true} activeClassName='active'>
            Ingredients-Category
          </NavLink>
        </li> */}
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
