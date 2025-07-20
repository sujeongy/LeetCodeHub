function climbStairs(n: number): number {
    if(n === 1) return 1;
    let f = 1, s = 1, t = 0;
    for(let i=2;i<=n;i++) {
        t = f + s;
        f = s;
        s = t;
    }
    return t;
};