import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import SignupFormModal from '../SignupFormModal';
import LoginFormModal from '../LoginFormModal';
import LoginForm from '../LoginFormModal/LoginForm';
import { Modal } from "../../context/Modal";
// import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  let startProject;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className="user-container">
          <button type="button" className="user-button">
            <NavLink to={`/users/${sessionUser.id}`}>Profile Page</NavLink>
            </button>
            <LogoutButton />
            </div>
      </>


    );
  } else {
    sessionLinks = (
      <>
      <div className="login-menu-right">
        <LoginFormModal />
        <SignupFormModal />
      </div>
      </>
    );

    // startProject = (
    //   <>
    //   {showModal && (<Modal onClose={() => setShowModal(false)}>
    //     <LoginForm />
    //   </Modal>
    //   )}
    //   </>
    // );
  }

  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <div className="navbar-header">
          <button className="navbar-button">
            <NavLink to='/' exact={true} className='navbar-brand'>
             Cocktail Party
           </NavLink>
          </button>
          {startProject}
        </div>
      <div className="nav-bar-center">
        <div className="nav-bar-center-logo">
        <ul>
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
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        </ul>
        </div>
      </div>
      <div className="nav-bar-right">
        {/* <SearchBar /> */}
        {sessionLinks}
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
