import config from '../config';

/**
 * Function to compare the created_at string in an object
 *
 * @param a
 * @param b
 * @return {number}
 */
export const compareCreatedAt = (a, b) => {
    if (a.created_at < b.created_at)
        return 1;
    if (a.created_at > b.created_at)
        return -1;
    return 0;
};

/**
 * Returns a random slogan
 *
 * @return {*}
 */
export const randomSlogan = () => {
    return config.slogans[Math.floor(Math.random() * config.slogans.length)];
};
