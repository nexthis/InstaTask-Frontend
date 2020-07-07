export   function getURLParameter(name:string, win:Window = window) {

    ///@ts-ignore
    // eslint-disable-next-line
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(win.location.search) ||
        [null, ''])[1].replace(/\+/g, '%20')) || null;
}