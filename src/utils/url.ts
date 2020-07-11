export function getURLParameter(name:string, win:Window = window) {
    ///@ts-ignore
    // eslint-disable-next-line
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(win.location.search) ||
        [null, ''])[1].replace(/\+/g, '%20')) || null;
}

export function combineURLs(baseURL:string, relativeURL:string):string {
    return relativeURL
      ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
      : baseURL;
  };