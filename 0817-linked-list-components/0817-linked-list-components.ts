/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function numComponents(head: ListNode | null, nums: number[]): number {
    if(!head) return null;
    let set = new Set(nums);  
    let result = 0, series = 0;
    while(head) {
        series = set.has(head.val) ? series + 1 : 0;
        if(series == 1)
        result += 1;
        head = head.next;
    }
    return result;
};