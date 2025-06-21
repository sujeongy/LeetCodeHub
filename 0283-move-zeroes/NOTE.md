# NOTE
## 고민한 것
- `return`하지 않고, 매개변수를 변경하는 것
- 새로운 배열을 만들어 덮어씌우지 않는 것
- 사실 for문을 두번 쓰고 싶지 않았다. 일단 빨리 푸는게 목적이라 진행은 했지만 아쉽다.
- `temp` 배열을 만들 생각만 했지, 변수로 따로 잡을 생각을 놓쳤다.

## 졸은 답변
```
function moveZeroes(nums: number[]): void {
    let start = 0;
    let temp = 0;
    for (let search = 0; search < nums.length; search++) {
        temp = nums[search];
        nums[search] = 0;
        if (temp !== 0) {
            nums[start] = temp;
            start++;
        }
    }
};
```
