import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getUserDrinksThunk } from '../store/users';

function User() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { userId }  = useParams();
  const drinks = useSelector(state => state.users?.drinks);

  useEffect(() => {
    dispatch(getUserDrinksThunk(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className="profile-page-container">
        <div className="profile-header-container">
          <div className="profile_header_container">
            <h2>{user.username}</h2>
            <div>
        <strong>Email:</strong> {user.email}
            </div>
            <div>
            <strong>User Id:</strong> {userId}
            </div>
            <div>
            <strong>Username:</strong> {user.username}
            </div>
            <div>
            </div>
          </div>
        </div>
        {/* <div className="profile-nav-container">
          <ul className="profile-page-tabs">
            <li className="profile-tab-item">
              <Link to={`/users/${userId}/drinks`}>Drinks</Link>
            </li>
            <li className="profile-tab-item">
              <Link to={`/users/${userId}/ingredients`}>Ingredients</Link>
            </li>
          </ul>
        </div> */}
      </div>
    )
};
export default User;
