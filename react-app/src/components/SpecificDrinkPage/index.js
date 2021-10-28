import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getSpecificDrinkThunk, deleteDrinkThunk } from '../../store/drinks';

const SpecificDrinkPage = () => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const { drinkId } = useParams();
    const user = useSelector((state) => state.session.user);
    const drinks = useSelector((state) => state.drinks?.drinks);
    const categories = useSelector(store => store.ingredientCategories?.ingredient_categories);
    console.log('drinks', drinks)
    console.log('drinkId', drinkId)

    useEffect(() => {
        console.log('useEffect')
        dispatch(getSpecificDrinkThunk(drinkId))
        console.log('dispatched specific drink thunk')
    }, [dispatch, drinkId])

    const handleDelete = (drinkId) => {
        dispatch(deleteDrinkThunk(drinkId))
        history.push('/drinks')
    }

    function EditDeleteDrink() {
        if(user && drinks?.user_id === user?.id) {
            return (
                <div className="edit-delete-drink-container">
                    <Link to={`/drinks/${drinkId}/edit`}>
                        <button className='edit-drink-button'>Edit Drink</button>
                    </Link>
                    <button className='delete-drink-button' onClick={() => handleDelete(drinkId)}>Delete Drink</button>
                </div>
            )
        }
        return null;
    }


    return (
        <div>
            <div className='drink_nav_container'>
                {/* {console.('drinks.name', drinks.drink_category_id)} */}
                <div className='drink-content-container'>
                <div className='drink-page-title'>
                    <h1>{drinks?.name}</h1>
                    {/* <p>Created By: {drinks?.username}</p> */}
                </div>
                <div className='drink-image-container'>
                    <img className='drink-image' src={drinks?.image_url} alt="" />
                </div>
                <div className='drink-category-container'>
                    <h4>{categories?.category}</h4>
                </div>
                <div>
                    <p className="drink-description">{drinks?.description}</p>
                </div>
                <div>
                    <h4 className='drink-ingredients-title'>INGREDIENTS</h4>
                    <p className="drink-ingredients">{drinks?.ingredients}</p>
                </div>
                <div>
                    <h4 className="drink-instructions">INSTRUCTIONS</h4>
                    <p className="drink-instructions">{drinks?.instructions}</p>
                </div>
                </div>
            </div>
            <div className='drink-page-container'>
                <EditDeleteDrink />
            </div>
        </div>
    );
};

export default SpecificDrinkPage;