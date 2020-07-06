export   function getURLParameter(name:string) {
    ///@ts-ignore
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location.search) ||
        [null, ''])[1].replace(/\+/g, '%20')) || null;
}