/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let result = init;
    if (nums.length > 0) {
        nums.forEach(ele => {
            result = fn(result, ele);
        }
        )
    }
    return result;
};