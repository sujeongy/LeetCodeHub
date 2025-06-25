function isValid(s: string): boolean {
    if(s.length % 2 === 1) return false;
    let stack = [];
    const openMap = {
        ")": "(",
        "}": "{",
        "]": "[", 
    }
    const closed = [")", "}", "]"];
    for(let i=0; i<s.length; i++){
        const curr = s[i];
        if(closed.includes(curr)) {
            if(stack.pop() !== openMap[curr]) { 
                return false;
            }
        } else {
            stack.push(curr);
        }
        if(i === s.length - 1 && stack.length) {
            return false;
        }
    }
    return true;
}