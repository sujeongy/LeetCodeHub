# NOTE

## 팁
- 해시 기반 자료구조는 key → value 매핑을 O(1)로 처리할 수 있어야 한다는 게 핵심.
- 이런 카운팅/빈도 체크 문제에는 Map(또는 {} object) 가 제일 효율적
- 👉 아나그램 = 반드시 문자별 빈도 = 해시맵/객체로 풀자!
- 👉 indexOf/splice는 작은 케이스 연습용만!

## 참고 코드
```
return
> 반복문 종료, 함수 자체 종료

const forReturn = () => {
  let sum = 0;

  for (let i = 0; i <= 100; i++) {
    if (sum > 100) {
      return;
    }
    sum += i;
  }
  
  console.log(sum); // 실행안됨
};

forReturn();
sum이 100보다 커질 때 반복문뿐만 아니라 forReturn( ) 함수 자체를 종료시킨다.
그래서 console에는 아무 값도 출력되지 않는다.
// 출처: https://jindev-t.tistory.com/105
```
