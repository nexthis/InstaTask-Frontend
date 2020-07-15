import { put, call, select } from "redux-saga/effects";
import actions from 'store/posts/actions'
import {getPosts, addPosts} from 'api/post'
//import {toastr} from 'react-redux-toastr'

export function* feachPost() {
    yield put(actions.featchPostsLoading());

    const posts = yield call(getPosts)
    if(posts){
        
        yield put(actions.featchPostsSuccess(posts));
    }
    else{
        //toastr.error('Wystąpił błąd podczas pobierania danych', ' skotaktuj się z administaracją')
        yield put(actions.featchPostsFailure('There was an error while fetching user informations.'));
    }
}

export function* addPost() {
    yield put(actions.addPostSendLoading());
    const selectPost = (state:any) => ({post: state.posts.addPost, token: state.auth.user.token})
    let data = yield select(selectPost);
    console.log(data);
    
    const post = yield call(addPosts,data.post, data.token)
    console.log(post);
    // if(posts){
        
    //     yield put(actions.featchPostsSuccess(posts));
    // }
    // else{
    //     //toastr.error('Wystąpił błąd podczas pobierania danych', ' skotaktuj się z administaracją')
    //     yield put(actions.featchPostsFailure('There was an error while fetching user informations.'));
    // }
}