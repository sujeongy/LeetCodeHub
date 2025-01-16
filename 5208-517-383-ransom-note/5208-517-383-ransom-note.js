/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canConstruct = function(ransomNote, magazine) {
    const charCounts = {};

    // magazine의 각 문자의 빈도수를 계산
    for (const char of magazine) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    // ransomNote의 각 문자에 대해 magazine에 충분한 문자가 있는지 확인
    for (const char of ransomNote) {
        if (!charCounts[char] || charCounts[char] <= 0) {
            return false;
        }
        charCounts[char]--;
    }

    return true;
};