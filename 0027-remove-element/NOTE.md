# NOTE

## 문제점
포인터 사용을 하는 문제에서 시간이 없어서 새로운 배열로 덮어버렸다.

### 이전 제출 답안
```javascript
function removeElement(nums: number[], val: number): number {
    const filtered = nums.filter((num) => num !== val);
    nums.length = 0;
    nums.push(...filtered);
    return filtered.length;
};
```

### ✅ in-place의 정확한 뜻
#### in-place란
추가적인 새 배열을 사용하지 않고 기존 배열 nums 자체를 직접 수정해서 원하는 결과
즉,
`nums = nums.filter(x => x !== val);`
처럼 새 배열을 만들고 기존 배열 nums를 통째로 덮어쓰기 하면 in-place 요구를 만족하지 못함
-> 왜냐면 filter는 내부적으로 새 배열을 만들어 반환

## 📌 요약
| 조건                       | 가능 여부                     |
| ------------------------ | ------------------------- |
| in-place (같은 배열, 새 배열 X) | ✅                         |
| filter로 새 배열 만들어 덮어쓰기    | ❌                         |
| splice로 원소 하나씩 제거        | ✅ (하지만 O(n²) 될 수 있어 비효율적) |
| 두 포인터로 overwrite         | ✅ (가장 일반적)                |


### ✅ 왜 splice는 O(n²)이 되는가?
자바스크립트 splice는 원소를 삭제하면 나머지 원소를 앞으로 밀어야 하기 때문에 시간복잡도가 O(n)

예를 들어:
`nums.splice(i, 1);`
하면:
- i번째 원소를 제거
- i+1부터 끝까지의 모든 원소를 앞으로 한 칸씩 당겨

#### 📌 그러면 반복문에서 여러 번 splice하면?
예: 길이 n짜리 배열에서 val을 계속 찾아서 splice로 지운다고 하면:

- 첫 번째 삭제 → O(n)
- 두 번째 삭제 → O(n)
- ...
- 총 m번 삭제 → O(m * n)

- 최악의 경우 m ≈ n이면 👉 O(n²)

## 참고
- [YOUTUBE - LeetCode Solution - 27. Remove Element | Microsoft Interview](www.youtube.com/watch?v=UPJf-Whg3fM)
