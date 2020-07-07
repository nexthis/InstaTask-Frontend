import { createAction } from '@reduxjs/toolkit';
import {PostsInterface} from 'api/post'

export enum PostTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_LOADING = 'FETCH_POSTS_LOADING',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE',
}

const featchPosts = createAction(PostTypes.FETCH_POSTS);
const featchPostsLoading = createAction(PostTypes.FETCH_POSTS_LOADING);
const featchPostsSuccess = createAction<Array<PostsInterface>>(PostTypes.FETCH_POSTS_SUCCESS);
const featchPostsFailure = createAction<string>(PostTypes.FETCH_POSTS_FAILURE);


export default {featchPosts, featchPostsLoading, featchPostsSuccess, featchPostsFailure}