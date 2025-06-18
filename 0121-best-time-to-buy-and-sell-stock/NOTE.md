# NOTE
- 설명 대비 너무 쉬운 문제.
- `Math.min()`, `Math.max()` 사용과 적절한 초기값을 잡아주는게 포인트
- 불필요하게 spread syntax 사용해서 복잡도를 올리지 말자. ex) `Math.min([...arr])`
- 불필요하게 `for문`을 두번 사용할 필요가 없다.

## 참고 코드
```
function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
}
```

## 참고
- [Explain solution in English]([prices](https://www.youtube.com/watch?v=9ZMMNyHy3z4))
