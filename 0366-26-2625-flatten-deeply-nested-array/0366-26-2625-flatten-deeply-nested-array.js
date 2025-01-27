/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
const flat = function (arr, depth) {
    if (depth === 0) return arr;

    let result = [...arr];
    for (let i = 0; i < depth; i++) {
        // 플랫한 결과를 한 단계로 만듭니다.
        result = result.reduce((acc, cur) => {
            if (Array.isArray(cur)) {
                acc.push(...cur);
            } else {
                acc.push(cur);
            }
            return acc;
        }, []);

        // 이미 완전히 플랫했다면 더 이상 반복하지 않습니다.
        if (result.every(ele => !Array.isArray(ele))) {
            break;
        }
    }

    return result;
};
