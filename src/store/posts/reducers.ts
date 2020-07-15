import {createReducer} from '@reduxjs/toolkit'
import actions from './actions'

export const reducer = createReducer({},{
    [actions.featchPostsLoading.type] : (state) => ({
        ...state,
        postIsLoading: true,
        postErrorMessage: false,
    }),
    [actions.featchPostsSuccess.type] : (state, action) => 
    ({
        ...state,
        posts: action.payload,
        postIsLoading: false,
        postErrorMessage: false,
    })
    ,
    [actions.featchPostsFailure.type] : (state, action) => ({
        ...state,
        userIsLoading: false,
        postErrorMessage: action.payload,
    }),
    [actions.addPostSetData.type] : (state, action) => ({
        ...state,
        addPost: action.payload,
    }),
    [actions.addPostSendLoading.type] : (state, action) => ({
        ...state,
        addPostLoading: true,
    }),
})