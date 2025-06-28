function isValid(s: string): boolean {
    const obj = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    let stack = [];
    let result = true;
    if(s.length % 2 === 1) return false;
    for(let i=0;i<s.length;i++) {
        if(s[i] === ")" || s[i] === "}" || s[i] === "]") {
            if(stack.pop() !==  obj[s[i]]) return false;
        } else {
            stack.push(s[i]);
        }
    }
    if(stack.length) return false;
    return true;
}