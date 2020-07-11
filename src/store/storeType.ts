import {PostsInterface as BasePostsInterface,AddTaskInterface} from 'api/post'
import {UserInterface} from 'api/global'

export interface StoreInterface{
    posts: PostsInterface,
    auth: AuthInterface,
}

export interface PostsInterface {
    posts: Array<BasePostsInterface> | null,
    addPost: AddTaskInterface | null,
    postIsLoading: boolean,
    postErrorMessage: boolean,
}

export interface AuthInterface {
    user: UserInterface | null,
    isLoggedIn: boolean,
    authErrorMessage: boolean,
}
