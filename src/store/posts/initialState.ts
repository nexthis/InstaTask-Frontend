import {PostsInterface} from 'store/storeType'


const state:PostsInterface = {
    postIsLoading: false,
    postErrorMessage: false,
    posts: [],
    addPost: null,
    postPaginate: {
        current_page: 0,
        first_page_url: '',
        from: 0,
        last_page: 0,
        last_page_url: '',
        next_page_url: null,
        path: '',
        per_page: 0,
        prev_page_url: null,
        to: 0,
        total: 0,
        data: [],
    },
}


export default state 