# NOTE

본인이 취약한 Sliding Window 문제
- 투 포인트 알고리즘은 구간의 넓이가 조건에 따라 유동적, 슬라이딩 윈도우 알고리즘은 항상 구간의 넓이가 고정

## 문제점
- 어제 풀었던 문제[0053-maximum-subarray](https://github.com/sujeongy/LeetCodeHub/blob/main/0053-maximum-subarray/NOTE.md)에서 갯수 제한만 하면 되는 문제였다. 응용을 아예 못했다.

### 사용한 코드
```js
// 첫 시도한 코드 - time limit exceeded
// BAD 👎🏼
function findMaxAverage(nums: number[], k: number): number {
    let arr = [];
    for(let i=0;i<=nums.length - k;i++){
        const sum = nums.slice(i, k+i).reduce((acc, curr) => {
            return acc + curr
        }, 0);
        arr.push(sum);
    }
    return Math.max(...arr) / k;
};
```

## 참고
- [다빈치코드 알고리즘 - Sliding Window](https://wikidocs.net/206308)
