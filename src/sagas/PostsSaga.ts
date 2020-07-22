import { put, call, select } from "redux-saga/effects";
import { PayloadAction } from '@reduxjs/toolkit';
import {Paginate} from 'api/global'
import {getExternalURLParameter} from 'utils/url'
import actions from 'store/posts/actions'
import {getPosts, addPosts} from 'api/post'
import {toastr} from 'react-redux-toastr'

export function* feachPost(action: PayloadAction<undefined | 'next' | 'previous' | number>) {
    yield put(actions.featchPostsLoading());
    let posts;
    if(action.payload) {
        let count = '1'
        const selectPost = (state:any) => (state.posts.postPaginate)
        const data:Paginate<boolean> = yield select(selectPost);
        if(data)
            count = getExternalURLParameter('page', data.next_page_url  as string) as string;
        posts = yield call(getPosts,count)
    } 
    else{
        posts = yield call(getPosts)
    }
    
    if(posts){
        
        yield put(actions.featchPostsSuccess(posts));
    }
    else{
        toastr.error('Wystąpił błąd podczas pobierania danych', ' skotaktuj się z administaracją')
        yield put(actions.featchPostsFailure('There was an error while fetching posts informations.'));
    }
}

export function* addPost() {
    yield put(actions.addPostSendLoading());
    const selectPost = (state:any) => ({post: state.posts.addPost, token: state.auth.user.token})
    let data = yield select(selectPost);
   // console.log(data);
    
    const post = yield call(addPosts,data.post, data.token)
    // console.log(post);
    if(post){
        
        yield put(actions.addPostSendSuccess(post));
    }
    else{
        //toastr.error('Wystąpił błąd podczas pobierania danych', ' skotaktuj się z administaracją')
        yield put(actions.addPostSendFailure('There was an error while fetching user informations.'));
    }
}