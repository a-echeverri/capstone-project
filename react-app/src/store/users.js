const GET_USER_DRINKS = 'user/drinks_load'
// const GET_USER_DRINKS = 'user/pledge_drink_load'


const getUserDrinksAction = drinks => ({
    type: GET_USER_DRINKS,
    payload: drinks
})

// const getBackedDrinksAction = drinks => ({
//     type: GET_USER_DRINKS,
//     payload: drinks
// })


// export const getBackedDrinksThunk = (id) => async (dispatch) => {
//     const res = await fetch(`/api/users/${id}/backed`)
//     if(res.ok) {
//         const drinks = await res.json()
//         dispatch(getBackedDrinksAction(drinks))
//         return drinks
//     }
// }

export const getUserDrinksThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/drinks`)
    if (res.ok) {

        const drinks = await res.json();
        dispatch(getUserDrinksAction(drinks))
        return drinks
    }
    return res
}


const initialState = {}

export default function userReducer(state = initialState, action){

    switch(action.type) {
        case GET_USER_DRINKS:
            return {drinks: action.payload}
        // case GET_USER_DRINKS:
        //     return {drinks: action.payload}
        default:
            return state
    }
}
