# LeetCode: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
# 1290
# Used Solution

# Givens
# - head
#   - reference node to singly linked list
# - Value is either 0 or 1
# - Full list holds the binary representation of a number

# Input:
# - Array of node data

# Output:
# - Return the decimal value of the number in the linked list

# Constraints
# - List is not empty
# - Number of nodes will not exceed 30
# - Each node's value is either 0 or 1

# PseudoCode
# Function to go through each node & record data values (String or array)
# - Actually don't given in array form
# Function to take vaules (String or array) and calculate binary number
# 

# Observations
# It doesn't look like we even need a linked list because the head is given as an array of the numbers
# This is more of a binary problem rather than linked list
#   - Nevermind, solving as linked list

# Current Status/Resources Used:
# - On Computer
# - Needed to research Binary
# - Binary cheatsheet Right There ->
# - Internet Support
#   - Python for loops & Reversed
#     - Can use reversed() or range(start,stop,iteration)
#   - python += operator
#   - python length operator

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# class Solution:
#     def getDecimalValue(self, head: ListNode) -> int:

# def findDecimal(binaryArray):
#   baseNumber = 1
#   decimal = 0
#   for i in range(len(binaryArray)-1,-1,-1):
#     if binaryArray[i] == 1:
#       decimal += baseNumber
#     baseNumber = baseNumber * 2
#   return decimal

# print (findDecimal([1,0,1]))

# SOLUTION
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
      num = head.val
      while head.next:
        num = num * 2 + head.next.val
        head = head.next
      return num

