import { put, call } from "redux-saga/effects";
import actions from 'store/Auth/actions'
import { login as apiLogin } from 'api/auth'
import { toastr } from 'react-redux-toastr'

export function* login() {
    // yield put(actions.authLoginLoading());

    const user = yield call(apiLogin)
    if (user) {

        yield put(actions.authLoginSuccess(user));
        toastr.success(`Witaj ${user.name}`, 'Miło cię znowu widzieć ^^', {
            timeOut: 3000, transitionIn:"fadeIn",
            transitionOut:"fadeOut",
            ///@ts-ignore
            position:'bottom-right',
        });
    }
    else {
        yield put(actions.authLoginFailure('AUTH ERROR'));
    }
}
