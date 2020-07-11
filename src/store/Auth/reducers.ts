import {createReducer} from '@reduxjs/toolkit'
import actions from './actions'
import state from './initialState'

export const reducer = createReducer(state,{

    [actions.authLoginSuccess.type] : (state, action) => 
    ({
        ...state,
        user: action.payload,
        isLoggedIn: true,
        authErrorMessage: false,
    })
    ,
    [actions.authLoginFailure.type] : (state, action) => ({
        ...state,
        isLoggedIn: false,
        postErrorMessage: action.payload,
    }),
})