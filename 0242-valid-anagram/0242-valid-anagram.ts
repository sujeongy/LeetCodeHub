function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length) return false;
    const strArr = s.split('');
    let result = true;
    for(let i=0;i<t.length;i++){
        const idx = strArr.indexOf((t[i]))
        if(idx > -1) {
            strArr.splice(idx, 1);
        } else {
            result = false;
        }
    }
    return result;
};