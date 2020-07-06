import { put, call } from "redux-saga/effects";
import {featchPostsLoading, featchPostsSuccess, featchPostsFailure} from 'store/posts/actions'
import {getPosts} from 'api/post'


export function* feachPost() {
    yield put(featchPostsLoading());

    const posts = yield call(getPosts)
    if(posts){
        
        yield put(featchPostsSuccess(posts));
    }
    else{
        yield put(featchPostsFailure('There was an error while fetching user informations.'));
    }
}