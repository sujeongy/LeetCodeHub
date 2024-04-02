function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxNum = Math.max(...candies);
    return candies.map((candy) => candy+extraCandies >= maxNum);
};