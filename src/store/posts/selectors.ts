import {StoreInterface} from '../storeType'

export function getPosstById(store: StoreInterface, id:string){
    return store.posts.posts?.find((item)  => item.data_key === id);
}