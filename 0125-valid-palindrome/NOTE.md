# NOTE
## 고민한 것
- 정규식 `match()`함수만 생각나고 `replace()` 사용 생각하지 못했다.
- 정규식 생성에 시간이 오래 걸렸다.
- Array / String 또는 Two Pointers 방법으로 풀 수 있다.
### 코드 참고
```javascript
// FRIST TRY
function isPalindrome(s: string): boolean {
    if(!s.trim()) return true;
    const str = s.toLowerCase();
    const regexp = /[a-z0-9]/gi;
    const matchesArray = str.match(regexp);
    const val1 = matchesArray?.join('');
    const reversedMatchesArray = matchesArray?.reverse();
    const val2 = reversedMatchesArray?.join('');
    return val1 == val2;
};
```

```javascript
// GOOD - Array / String 
function isPalindrome(s: string): boolean {
    if(!s.trim()) return true;
    const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return newStr = newStr.split('').reverse().join('');
};
```

```js
// Two Pointers
let regex = /[a-z0-9]/i

function isPalindrome(s: string): boolean {
    let ls = s.toLowerCase();

    let i = 0;
    let j = ls.length - 1;

    while (i < j) {
        if (!regex.test(ls[i])) {
            i++;
            continue;
        }
        if (!regex.test(ls[j])) {
            j--;
            continue;
        }

        if (ls[i] !== ls[j]) {
            return false;
        }

        i++;
        j--;
    }
    
    return true
};
```

## 이미지 참고
- [정규식 생성 페이지](https://regexr.com/)
### `[^a-z0-9]`
<img width="1102" alt="image" src="https://github.com/user-attachments/assets/05ee84c9-be3c-451b-899d-c62f959f4df3" />

### `[a-z0-9]`
<img width="1109" alt="image" src="https://github.com/user-attachments/assets/bd7260c4-1584-4c4f-8d3c-11be6650020b" />

