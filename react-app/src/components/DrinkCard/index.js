import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getUserDrinksThunk } from '../../store/users';
import React, { useEffect } from 'react';
// import User from '../UsersPage/User'

function DrinkCard() {
    const { userId }  = useParams();
    const dispatch = useDispatch()
    const user_drinks = useSelector(state => state.users?.drinks)
    
    useEffect(() => {
        dispatch(getUserDrinksThunk(userId))
        
    }, [dispatch, userId])
    
    // console.log(user_drinks.map(drink => drink.name))

    return (
      <div className="profile-content-wrap">
        <ul className="profile-content-container">
          {user_drinks?.map((drink) => (
            <li className="drink-item" key={drink.id}>
              <Link to={`/drinks/${drink.id}`} key={drink.id}>
                <div className="drink-card">
                  <div>
                    <img
                      className="drink-card-image"
                      src={drink.image_url}
                      alt=""
                    />
                  </div>
                  <div className="drink-card-info">
                    <h3 className="drink-card-name">{drink.name}</h3>
                    <p className="drink-card-des">{drink.description}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );

}

export default DrinkCard;

