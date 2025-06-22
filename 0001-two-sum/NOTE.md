# NOTE
Object으로도 구현가능하고, Map 객체로도 구현 가능하다.

```javascript
// Object
Function twoSum(nums: number[], target: number): number[] {
    const numObject = {};
    for(const [index, ele] of nums.entries()) {
        if(numObject[ele] !== undefined) {
            return [numObject[ele], index];
        }
        numObject[target - ele] = index;
    }
};
```
```javascript
// Map
function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for(let i=0;i<nums.length;i++) {
        const num = nums[i];
        const diff = target - num;
        if(map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(num, i);
    }
};
```

## 다시 볼 것​
- [Object.entries()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [Array.prototype.entries()
Baseline Widely available
](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
