import {UserInterface} from './global'
import {getURLParameter} from 'utils/url'

export async function login():Promise<(UserInterface | null)>  {
    const win = window.open('https://2410eeda39d8.ngrok.io/auth/instagram/',"InstaTask - Login", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=500,height=500,left=50,top=50')
    
    if(win === null) return null;

    const data =  await new Promise( (resolve,reject)=> {
       const interval = setInterval(()=>{
            try{
                const token = getURLParameter('token',win);
                if(token !== null || win.closed){
                    const isNew = getURLParameter('new',win);
                    const id = getURLParameter('id',win);
                    const data_key = getURLParameter('data_key',win);
                    const name = getURLParameter('name',win);
                    const instagram_id = getURLParameter('instagram_id',win);
                    const instagram_token = getURLParameter('instagram_token',win);
                    const image = getURLParameter('image',win);
                    const created_at = getURLParameter('created_at',win);
                    const updated_at = getURLParameter('updated_at',win);
                    resolve(win.closed? null : {new:isNew,id,token,data_key,name,instagram_id,instagram_token,image,created_at,updated_at});
                    clearInterval(interval);
                    win.close();
                }

            }
            catch(err){
               // console.log(err);
            }
    
        },100)
    }) 
    return data as UserInterface;
}


