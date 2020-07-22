import {createReducer} from '@reduxjs/toolkit'
import actions from './actions'
import state from './initialState'
import _ from 'lodash'

export const reducer = createReducer(state as any,{

    // FEATCH POST 
    [actions.featchPostsLoading.type] : (state) => ({
        ...state,
        postIsLoading: true,
        postErrorMessage: false,
    }),
    [actions.featchPostsSuccess.type] : (state, action) => 
    ({
        ...state,
        ///@ts-ignore
        posts: [...action.payload.data, ...state.posts],
        postPaginate: _.omit(action.payload, 'data') ,
        postIsLoading: false,
        postErrorMessage: false,
    })
    ,
    [actions.featchPostsFailure.type] : (state, action) => ({
        ...state,
        userIsLoading: false,
        postErrorMessage: action.payload,
    }),

    // ADD POST 
    [actions.addPostSetData.type] : (state, action) => ({
        ...state,
        addPost: action.payload,
    }),
    [actions.addPostSendLoading.type] : (state, action) => ({
        ...state,
        addPostLoading: true,
    }),
    [actions.addPostSendSuccess.type] : (state, action) => ({
        ...state,
        ///@ts-ignore
        posts: [action.payload, ...state.posts],
        addPostLoading: false,
    }),
})