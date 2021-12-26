<!-- https://www.101computing.net/big-o-notation/ -->

# Big O notation
- Execution time and space used for an algorithm
- Specifically describes the worst case scenario
- Used for time a space complexities



1. Constant Notation: **O(1)**
    - Will always execute in the same yime regardless of the size of the data set
    - *Examples*: Hashing algorithm

1. Linear Notation: **O(N)**
    - Execution time grows in direct proportion to the size of the data set it is processing
    - *Examples*: Linear Search (Single Loop)

1. Polynomial Notation: **O(N^x)**
    - Quadratic O(N^2) & Cubic O(N^3) algorithms & so on...
    - Performance directly proportional to the N^x of the data set
    - *Examples*: Nested loops, power (x) increases with each nest

1. Exponential Notation: **O(2^N)**
    - Growth doubles with each addition to the data set
    - *Examples*: 
      - Backtracking algorithms which test every possible “pathway” to solve a problem can be based on this notation. Such algorithms become very slow as the data set increases
      - An algorithm to list all the possible binary permutations depending on the number of digits (bits)

1. Logarithmic Notation: **O(log(N))**
    - Growth decreases when the data set increase following a logarithmic curve
    - Quite efficient, especially when processing large sets of data
    - *Example*: Binary Search