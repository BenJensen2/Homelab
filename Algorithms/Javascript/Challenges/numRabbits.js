// https://leetcode.com/problems/rabbits-in-forest/
// There is a forest with an unknown number of rabbits. 
// We asked n rabbits "How many rabbits have the same color as you?" 
// and collected the answers in an integer array answers 
// where answers[i] is the answer of the ith rabbit.

// Given the array answers, 
// return the minimum number of rabbits 
// that could be in the forest.

// Assumptions:
// - Each rabbit is telling the truth
// - Each rabbit knows exactly how many of his color are in the forest

// Pattern: 
// - Every new number has that many rabbits + 1

// Pseudo Code:
// Initialize empty dictionary
// Store each new number in an array