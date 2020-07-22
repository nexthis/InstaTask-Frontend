export function getURLParameter(name: string, win: Window = window) {
    ///@ts-ignore
    // eslint-disable-next-line
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(win.location.search) ||
        [null, ''])[1].replace(/\+/g, '%20')) || null;
}

export function getExternalURLParameter(name: string, url:string) {
    ///@ts-ignore
    // eslint-disable-next-line
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) ||
        [null, ''])[1].replace(/\+/g, '%20')) || null;
}


export function combineURLs(baseURL: string, relativeURL: string): string {
    return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
};

export function validURL(str: string) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

export function imageURL(image: string) {
    if (!validURL(image))
        return combineURLs(process.env.REACT_APP_BASE_URL as string, image);

    return image
}