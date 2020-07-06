import {PostsInterface as BasePostsInterface} from 'api/post'


export interface StoreInterface{
    posts: PostsInterface,
}

export interface PostsInterface {
    posts: Array<BasePostsInterface> | undefined,
    postIsLoading: boolean,
    postErrorMessage: boolean,
}