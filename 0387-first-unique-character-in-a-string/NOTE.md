# NOTE

## 고민한 것
- MAP, SET사용에 집중하다보니 더 쉽고 빠르게 풀 수 있는데 놓쳤다.
- 아래는 가볍게 풀 수 있는 정답중 하나다.

```js
// GOOD
function firstUniqChar(s: string): number {
    for (let i = 0; i < s.length; i++) {                // 1
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {  // 2
            return i;                                   // 3
        }
    }
    return -1;                                         // 4

};
```

## 📌 Map 패턴 (카운트 세기 / Key-Value 추적)
### 문제	링크	난이도	키포인트
| 문제                                                      | 링크                                                                                    | 난이도    | 키포인트                  |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------ | --------------------- |
| ✅ **1. Two Sum**                                        | [Link](https://leetcode.com/problems/two-sum/)                                        | Easy   | Map으로 Target 찾기       |
| ✅ **387. First Unique Character in a String**           | [Link](https://leetcode.com/problems/first-unique-character-in-a-string/)             | Easy   | Map으로 Frequency Count |
| ✅ **205. Isomorphic Strings**                           | [Link](https://leetcode.com/problems/isomorphic-strings/)                             | Easy   | Map 2개로 1:1 대응        |
| ✅ **451. Sort Characters By Frequency**                 | [Link](https://leetcode.com/problems/sort-characters-by-frequency/)                   | Medium | Map + 정렬              |
| ✅ **3. Longest Substring Without Repeating Characters** | [Link](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | Map + Sliding Window  |
| ✅ **560. Subarray Sum Equals K**                        | [Link](https://leetcode.com/problems/subarray-sum-equals-k/)                          | Medium | Prefix Sum + Map      |
