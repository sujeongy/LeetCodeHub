/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = function(arr, fn) {
    arr.sort((a, b) => fn(a) - fn(b));
    return arr;
};