import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getSpecificDrinksThunk } from '../../store/drinks';

const SpecificDrinkPage = () => {
    
    const user = useSelector((state) => state.session.user);
    const drinks = useSelector((state) => state.drinks?.drinks);
    const { drinkId } = useParams();
    console.log('drinks', drinks)
    console.log('drinkId', drinkId)

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect')
        dispatch(getSpecificDrinksThunk(drinkId))
        console.log('dispatched specific drink thunk')
    }, [dispatch, drinkId])

    return (
        <div>
            <div>
                <h1 className="drink-title">{drinks?.name}</h1>
            </div>
            <div>
                <img className="drink-image" src={drinks?.image_url} alt=''/>
            </div>
            <div>
                <h4 className="drink-title">{drinks?.description}</h4>
            </div>
        </div>
    );

};

export default SpecificDrinkPage;