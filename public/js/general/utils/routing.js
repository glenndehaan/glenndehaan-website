/**
 * @param callback
 */
const routeObserver = (callback) => {
    window.addEventListener('popstate', () => {
        callback(window.location.pathname);
    });

    const pushState = history.pushState;
    history.pushState = (...args) => {
        callback(args[2]);
        return pushState.apply(history, args);
    };

    const replaceState = history.replaceState;
    history.replaceState = (...args) => {
        callback(args[2], true);
        return replaceState.apply(history, args);
    };
};

/**
 * @return {*}
 */
export const getBaseRoute = () => {
    const slug = window.location.href.replace(`${window.location.origin}/`, '');
    return slug !== '' ? [slug] : [];
};

export default routeObserver;
