import {createReducer} from '@reduxjs/toolkit'
import {featchPostsFailure,featchPostsLoading,featchPostsSuccess} from './actions'

export const PostReducer = createReducer({},{
    [featchPostsLoading.type] : (state) => ({
        ...state,
        postIsLoading: true,
        postErrorMessage: false,
    }),
    [featchPostsSuccess.type] : (state, action) => 
    ({
        ...state,
        posts: action.payload,
        postIsLoading: false,
        postErrorMessage: false,
    })
    ,
    [featchPostsFailure.type] : (state, action) => ({
        ...state,
        userIsLoading: false,
        postErrorMessage: action.payload,
    }),
})