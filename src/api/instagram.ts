import axios from 'utils/client';


type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength };

export interface InstagramGraphImageInterface{
    graphql: {
        shortcode_media:{
            id: string,
            shortcode: string,
            dimensions: {
                height: number,
                width: number,
            },
            display_url: string,
            display_resources: Tuple<{src: string,config_width: number,config_height: number,},3>
            owner: {
                id: string,
                profile_pic_url: string,
                username: string,
                full_name: string,
            }
        }
    }
}
/**
 * Return instagram image post as json base on post url
 * @example https://www.instagram.com/p/CCY7XAXBOMz/
 */
export async function getImage(url:string){
    try {
        if(!url.includes('?__a=1'))
            url = url.concat('?__a=1')
        const { data } = await axios.get<InstagramGraphImageInterface>(url)
        return {
            username: data.graphql.shortcode_media.owner.username, 
            image: data.graphql.shortcode_media.display_url,
            imageSmall: data.graphql.shortcode_media.display_resources[0].src,
            imageMedium: data.graphql.shortcode_media.display_resources[1].src,
            imageLarge: data.graphql.shortcode_media.display_resources[2].src,
        }
    }
    catch{
        return null
    }
}

/**
 * Return instagram images post as json base on profil url
 * @example https://www.instagram.com/p/CCY7XAXBOMz/
 */
export async function getFirstImage(url:string){
    try {
        if(!url.includes('?__a=1'))
            url = url.concat('?__a=1')
        const { data } = await axios.get<InstagramGraphImageInterface>(url)
        return {
            username: data.graphql.shortcode_media.owner.username, 
            image: data.graphql.shortcode_media.display_url,
            imageSmall: data.graphql.shortcode_media.display_resources[0].src,
            imageMedium: data.graphql.shortcode_media.display_resources[1].src,
            imageLarge: data.graphql.shortcode_media.display_resources[2].src,
        }
    }
    catch{
        return null
    }
}
