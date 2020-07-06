export async function auth() {
    const win = window.open('https://3ad6936aeb7d.ngrok.io/auth/instagram/',"InstaTask - Login", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=500,height=500,left=50,top=50')
    setInterval(()=>{
        try{
            console.log(win?.document);
        }
        catch(err){
            console.log(err);
            
        }

    },100)
}


