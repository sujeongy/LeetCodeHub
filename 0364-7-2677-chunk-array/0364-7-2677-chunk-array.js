/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = [];
    const count = Math.ceil(arr.length / size);
    for(let i=0;i<count;i++) {
        const val = arr.slice(i*size, (i+1)*size);
        result.push(val);
    }
    return result;
};
