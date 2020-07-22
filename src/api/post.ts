import axios from 'utils/client';
import { UserInterface,Paginate } from './global';


export interface PostsInterface {
    data_key: string,
    complete_count: number,
    views: number,
    image: string,
    links: Array<string>,
    prize: TaskInterface,
    task: TaskInterface,
    user: UserInterface,
    created_at: string,
}
export interface AddTaskInterface{
    image: {
        image: string,
        url: string,
    },
    prize: TaskInterface,
    task: TaskInterface,
}

export interface TaskInterface {
    like: number, 
    comments: number,
    follow: boolean, 
    promo: boolean, 
}

export async function getPosts(page:number | string = 1) {
    try {
        const { data } = await axios.get<Paginate<Array<PostsInterface>>>('posts',{
            params: {page:page}
        })
        return data;
    }
    catch{
        return null
    }
}

export interface getPostInterface {
    post: PostsInterface,
    popular: [PostsInterface,PostsInterface,PostsInterface]
}

export async function getPost(id:string) {

    try {
        const { data } = await axios.get<getPostInterface>('post',{
            params:{id},
        })
        return data;
    }
    catch{
        return null
    }
}

export async function addPosts(post: AddTaskInterface, token: string) {
    try {
        const { data } = await axios.post<PostsInterface>('post',post, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log("wywołana");
        
        return data;
    }
    catch{
        return null
    }
}

