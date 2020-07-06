import  axios from 'utils/client';
import { UserInterface } from './global';


export interface PostsInterface{
    data_key:string,
    complete_count: number,
    views: number,
    image: string,
    links: Array<string>,
    prize: { like: number, follow: boolean, comments: number },
    task: { like: number, follow: boolean, comments: number },
    user: UserInterface,
    created_at: string,
}

export async function getPosts() {
    try{
        const {data} = await axios.get<Array<PostsInterface>>('posts')
        return data;
    }
    catch{
        return null
    }
}

export async function addPosts() {
    try{
        const {data} = await axios.post<PostsInterface>('posts')
        return data;
    }
    catch{
        return null
    }
}