import { createAction } from '@reduxjs/toolkit';
import {PostsInterface,AddTaskInterface} from 'api/post'

export enum PostTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_LOADING = 'FETCH_POSTS_LOADING',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE',

    ADD_POST_SET_DATA = 'ADD_POST_SET_DATA',
    ADD_POST_SEND = 'ADD_POST_SEND',
    ADD_POST_SEND_LOADING = 'ADD_POST_SEND_LOADING',
    ADD_POST_SEND_SUCCESS = 'ADD_POST_SEND_SUCCESS',
    ADD_POST_SEND_FAILURE = 'ADD_POST_SEND_FAILURE',
}

const featchPosts = createAction(PostTypes.FETCH_POSTS);
const featchPostsLoading = createAction(PostTypes.FETCH_POSTS_LOADING);
const featchPostsSuccess = createAction<Array<PostsInterface>>(PostTypes.FETCH_POSTS_SUCCESS);
const featchPostsFailure = createAction<string>(PostTypes.FETCH_POSTS_FAILURE);

const addPostSetData = createAction<AddTaskInterface>(PostTypes.ADD_POST_SET_DATA);
const addPostSend = createAction(PostTypes.ADD_POST_SEND);
const addPostSendLoading = createAction(PostTypes.ADD_POST_SEND_LOADING);
const addPostSendSuccess = createAction<PostsInterface>(PostTypes.ADD_POST_SEND_SUCCESS);
const addPostSendFailure = createAction<string>(PostTypes.ADD_POST_SEND_FAILURE);

export default {
    featchPosts, 
    featchPostsLoading, 
    featchPostsSuccess, 
    featchPostsFailure,

    addPostSetData,
    addPostSend,
    addPostSendLoading,
    addPostSendSuccess,
    addPostSendFailure,
}