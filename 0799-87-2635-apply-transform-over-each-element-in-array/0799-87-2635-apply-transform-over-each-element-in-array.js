/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = []
    arr.forEach((ele, idx) => {
        const val = fn(ele, idx);
        newArr.push(val);
    });
    return newArr;
};