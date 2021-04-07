let getTokenSilently = null;

export const getAccessToken = () => getTokenSilently;
export const setAccessToken = (func) => (getTokenSilently = func);
