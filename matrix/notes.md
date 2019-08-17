### Runtime complexity

Determines the performance of your code

 - **constant time** `1` : no matter the number of elements, the operation will always take the same amount of time
 - **logarithmic time** `log(n)` : if doubling the number of elements doesn`t affect the amount of work (normally search operations);
 - **linear time** `n` : time depends on number of elements (for loop iterations)
 - **quasilinear time** `n * log(n)` : if doubling the number of elements you are iterating over doesn`t double the amount of work. (sort operations)
 - **quadratic time** `n ^ 2` : every element in a collection has to be compared with other elements
 - **exponential time** `2 ^ n` : if you add a single element to a collection the processing power required doubles


#### examples of identify runtime complexity
 - simple for loop through single collection: `O(n) -> linear time`
 - iterate through a half collection: `O(n) -> linear time`
 - iterate through different collections with separate loops: `O(n + m) -> linear time`
 - nested for loops iterate over the same collection: `O(n^2) -> quadratic time`
 - sorting: `O(n*log(n)) -> quasilinear time`
 - searching a sorted array: `O(log(n)) -> logarithmic time`

 #### space complexity
  - related to how much more memory is required by doubling the problem set