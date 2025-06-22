# NOTE
## 고민한 것
- `hashmap`이니까 당연히 Map()객체로 풀려고 했다.
- `Set 객체`는 원시값이나 객체 참조 값 등 모든 유형의 고유 값을 저장할 때 사용 가능
  - 중복 값 제거는 new Set()으로 많이 사용했었는데 떠오르지 않았다.

## 참고 코드
```
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set_%EC%88%9C%ED%9A%8C%ED%95%98%EA%B8%B0
// 교집합(intersection)은 아래처럼 시뮬레이션 가능합니다.
const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)))
```
## hashmap 문제 - SET vs. MAP
|       | **Set**                    | **Map**                  |
| ----- | -------------------------- | ------------------------ |
| 목적    | 특정 값이 *존재하는지* 빠르게 확인       | 키에 대응하는 값을 저장하고 빠르게 가져오기 |
| 값의 중복 | 불가 (같은 값은 1번만 저장됨)         | 키만 유니크, 값은 중복 OK         |
| 사용 예  | 유니크 배열 만들기, 값 존재 여부 빠르게 확인 | 카운트 세기, 데이터 저장소 역할       |

### ✅ Set으로 푸는 대표 문제
배열에 중복값 있는지?
```
// containsDuplicate
const set = new Set(nums);
return set.size !== nums.length;
```
👉 값만 있으면 된다 = Set!

### ✅ Map으로 푸는 대표 문제
각 값이 몇 번 나왔는지 세기

```
// anagram check
const map = new Map();
for (let c of s) {
  map.set(c, (map.get(c) || 0) + 1);
}
```
👉 갯수를 세야 한다 → Map

### ✅ 요약 - 상황	추천
- 중복 제거만 필요	Set
- 값 존재 여부만 필요	Set
- 값에 대한 추가 정보 필요 (ex. count)	Map
- 빠른 삽입/검색 O(1) -> 둘 다 O(1)



## 참고
- [mdn - set](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [mdn - map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)
