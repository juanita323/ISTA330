/*
Given a non-negative integer, we want to reduce it to zero. 
We are allowed to do one of the following three operations:
1. divide the number by 3
2. divide the number by 4
3. subtract 1 from the number
Find the minimum number of operations to reduce a given number to zero.
Example: 
input: 12
output: 3
12 divided by 4 becomes 3 which divided by 3 becomes 1. The third and last step is the substraction by one operation.
*/

var minimalReduction = function(n) {
    let final = -1;
    if (n === 0)
        return 0;
    else {
        if (n % 3 === 0) {
            let track = minimalReduction(n / 3) + 1;
            if (track < final || final === -1)
                final = track;
        }
        if (n % 4 === 0) {
            let track = minimalReduction(n / 4) + 1;
            if (track < final || final === -1)
                final = track;
        }
        let track = minimalReduction(n - 1) + 1;
        if (track < final || final === -1)
            final = track;
        }
        return final;
};

