import { createAction } from '@reduxjs/toolkit';


export enum AuthTypes {
    AUTH_LOGIN = 'AUTH_LOGIN',
    AUTH_LOGIN_LOADING = 'AUTH_LOGIN_LOADING',
    AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
    AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE',

    AUTH_ME = 'AUTH_ME',
    AUTH_ME_LOADING = 'AUTH_ME_LOADING',
    AUTH_ME_SUCCESS = 'AUTH_ME_SUCCESS',
    AUTH_ME_FAILURE = 'AUTH_ME_FAILURE',

    AUTH_LOGOUT = 'AUTH_LOGOUT',
    AUTH_LOGOUT_LOADING = 'AUTH_LOGOUT_LOADING',
    AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS',
    AUTH_LOGOUT_FAILURE = 'AUTH_ME_FAILURE',
}

const authLogin = createAction(AuthTypes.AUTH_LOGIN);
const authLoginLoading = createAction(AuthTypes.AUTH_LOGIN_LOADING);
const authLoginSuccess = createAction(AuthTypes.AUTH_LOGIN_SUCCESS);
const authLoginFailure = createAction<string>(AuthTypes.AUTH_LOGIN_FAILURE);


export default {authLogin, authLoginLoading, authLoginSuccess, authLoginFailure}