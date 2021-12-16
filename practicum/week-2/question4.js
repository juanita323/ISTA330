/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    var count = 0;
    var arrayOfB = B.split('');
    for(let i=0; i<arrayB.length; i++)
    {
        if(A.indexOf(arrayB[i])>-1){
        count+=1;
        }
  
    }
    return count;

};