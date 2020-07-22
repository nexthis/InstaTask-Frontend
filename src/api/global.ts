

export interface UserInterface {
    data_key: string,
    image: string,
    instagram_profil: string,
    instagram_id: string,
    instagram_token: string,
    name: string,
    token: string,
    new: boolean,
    created_at: string,
    updated_at: string,

}


export interface BearerToken {

}


export interface Paginate<T> {
    current_page: number
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
    data: T
}
