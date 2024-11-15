/*
    Javascript Execution Context

    `Code file` -> Global Execution Context <- this (window object)
                                                                                            Javascript single threaded hai

    Mainly two types of Execution Context (EC) -> Global EC, Function EC, Eval EC(usually a property of Global EC)

    `Code files execute in two phases` -> i. Memory Creation Phase      ii. Execution Phase

*/

let val1 = 10
let val2 = 5

function addNum(num1, num2) {
    let num = num1 + num2
    return num
}

let res1 = addNum(val1, val2)
let res2 = addNum(10, 3)


/* 
    Steps how this code is executed ::
        1.  Global Execution -> this
        2.  Memory Creation Phase
                val1 -> undefined
                val2 -> undefined
                addNum -> definition {}
                res1 -> undefined
                res2 -> undefined

        3.  Execution Phase
                val1 <- 10
                val2 <- 5
                res1 = addNum -> new Executional Context -> new variable environment + execution thread
                    1. Memory Phase
                        num1 -> undefined
                        num2 -> undefined
                        total -> undefined

                    2. Execution Phase
                        num1 <- 10
                        num2 <- 5
                        total <- 15   ----> 15 returned
                    Now, this executional context is deleted
                res2 = addNum -> new Executional Context -> new variable environment + execution thread
                    1. Memory Phase
                        num1 -> undefined
                        num2 -> undefined
                        total -> undefined

                    2. Execution Phase
                        num1 <- 10
                        num2 <- 3
                        total <- 13   ----> 13 returned
                    Now, this executional context is deleted
*/