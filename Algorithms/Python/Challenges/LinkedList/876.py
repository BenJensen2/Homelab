# Definition for singly-linked list.
# Look up Push to array
import math


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Set current to the head node
        nodeArray = []
        current = head
        # loop through all the nodes
        while current.next:
            # Appending them to the nodeArray
            nodeArray.append(current)
            # Divide by 2 with math.floor (//)
        return nodeArray[len(nodeArray)//2]


