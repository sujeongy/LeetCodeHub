# NOTE
## 고민할 것
for, forEach 등 속도

## 문제점
습관적으로 `forEach`가 속도가 가장 빠르다고 생각해서 자주 쓰려고 했다.
허나 `string`에서도 배열처럼 접근할 수 있는데 굳이 **string을 `array`화**(*str.split('')*)는 작업을 추가함

-> 결과적으로 속도가 더 느려짐
### 예시 코드
```
const str = "string to array";
// # 👀 NOT BAD
// # case1
[...str].forEach(char => console.log(char));
// # case2
str.split('').forEach(char => console.log(char));

// ✅ GOOD
for(let i=0; i<str.length; i++) {
  console.log(str[i]);
}
```

## 결과
당연한 말이지만 적절한 상황에 필요한 루프를 사용할 것

## 참고
- [Which for-loop is the fastest in JavaScript?](https://dev.to/siddiqus/which-for-loop-is-the-fastest-in-javascript-4hdf)
- [time check script](https://github.com/siddiqus/useful-scripts/blob/master/for-loop-benchmark.js)
