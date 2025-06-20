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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let node = head;
    while(node) {
        const next = node.next;
        if(next && node.val === next.val) {
            node.next = node.next?.next;
        } else {
            node = node.next;
        }
    }
    return head;
};