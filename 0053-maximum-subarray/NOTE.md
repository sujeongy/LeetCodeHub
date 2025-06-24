# NOTE
주기적으로 다시 풀 것

## 문제점
- [SubArray](https://www.geeksforgeeks.org/dsa/array-subarray-subsequence-and-subset/)를 뜻을 몰랐다.
- `for`문을 두번써서 `time limit exceeded` 발생
- 이전에 풀었던 문제[0121-best-time-to-buy-and-sell-stock
](https://github.com/sujeongy/LeetCodeHub/blob/main/0121-best-time-to-buy-and-sell-stock/NOTE.md)를 제대로 활용하지 못했다.
- 문제 파악을 제대로 못했다.

### 사용한 코드 
```js
// 첫 시도한 코드 - time limit exceeded
// BAD 👎🏼
function sum(arr) {
    return arr.reduce((acc, curr) => { return acc + curr; }, 0);
}
function maxSubArray(nums: number[]): number {
    let maxSum = Math.max(...nums);
    if(nums.length === 1) return maxSum;
    const len = nums.length ;
    for(let i=2;i <= len;i++) {
        let tempArr = [];
        for(let j=0;j<len;j++) {
            const val = [...nums].slice(j, i+j);
            tempArr.push(sum(val));
        }
        const maxNum = Math.max(...tempArr);
        if(maxNum > maxSum) { maxSum = maxNum; }
    }
    return maxSum;
};
```

## 참고
- [SubArray](https://www.geeksforgeeks.org/dsa/array-subarray-subsequence-and-subset/)
- [Leetcode Solution | 53. Maximum Subarray | Javascript | 4/75](https://www.youtube.com/watch?v=DF5azwm_LJc)
