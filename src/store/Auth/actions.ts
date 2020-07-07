import { createAction } from '@reduxjs/toolkit';
import {UserInterface} from 'api/global'

export enum AuthTypes {
    AUTH_LOGIN = 'AUTH_LOGIN',
    AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
    AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE',

    AUTH_ME = 'AUTH_ME',
    AUTH_ME_SUCCESS = 'AUTH_ME_SUCCESS',
    AUTH_ME_FAILURE = 'AUTH_ME_FAILURE',

    AUTH_LOGOUT = 'AUTH_LOGOUT',
    AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS',
    AUTH_LOGOUT_FAILURE = 'AUTH_ME_FAILURE',
}

const authLogin = createAction(AuthTypes.AUTH_LOGIN);
const authLoginSuccess = createAction<UserInterface>(AuthTypes.AUTH_LOGIN_SUCCESS);
const authLoginFailure = createAction<string>(AuthTypes.AUTH_LOGIN_FAILURE);


export default {authLogin, authLoginSuccess, authLoginFailure}