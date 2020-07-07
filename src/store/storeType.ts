import {PostsInterface as BasePostsInterface} from 'api/post'
import {UserInterface} from 'api/global'

export interface StoreInterface{
    posts: PostsInterface,
    auth: AuthInterface,
}

export interface PostsInterface {
    posts: Array<BasePostsInterface> | null,
    postIsLoading: boolean,
    postErrorMessage: boolean,
}

export interface AuthInterface {
    user: UserInterface | null,
    isLogin: boolean,
    authErrorMessage: boolean,
}