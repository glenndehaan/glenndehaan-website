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
