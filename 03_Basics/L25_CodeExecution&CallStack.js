/**
 * Whenever we execute a code in Js, "Global Execution Context" is always formed at the first  <- this
 * Then "function execution context" is formed.
 * Then "eval execution context" is formed  -> a property of Global EC
 * 
 * 
 * 
 * How JS code is executed?
 *      Memory Creation Phase -> all the variable get their memory
 *      Execution Phase  -> actual execution occurs
    Example : 
        let val1 = 10
        let val2 = 5
        function addNum(num1, num2) {
            let total = num1 + num2
            return total
        }
        let result1 = addNum(val1, val2)
        let result2 = addNum(10, 2)


        1. Global Execution -> this
        2. Memory Phase :  val1 -> undefined
                           val2 -> undefined
                           addNum -> definition
                           result1 -> undefined
                           result2 -> undefined
        3. Execution Phase : val1 <- 10
                             val2 <- 5
                             addNum
 */