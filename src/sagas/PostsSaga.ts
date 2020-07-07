import { put, call } from "redux-saga/effects";
import actions from 'store/posts/actions'
import {getPosts} from 'api/post'
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