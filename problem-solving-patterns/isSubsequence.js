// write a function called is Subsequence which takes in two strings
// and checks whether the character in the first string form a subsequence 
// of the characters in the second string. In other words, the function should
// check whether the characters in the first string appear somewhere
// in the second string, without their order changing

function isSubsequence(string1, string2){
    let string1Count = 0;
    let string2Check = 0;
    while(string2Check < string2.length){
        if(string2[string2Check] === string1[string1Count]){
            string1Count++;
        }
        if(string1Count === string1.length){
            return true
        }
        string2Check++;
    }
    return false;
}

const string1 = "abc";
const string2 = "acb";

console.log(isSubsequence(string1,string2))