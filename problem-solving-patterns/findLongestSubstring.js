// write a function called longest substring, accepts a string and returns the length of the longest substring with all distinct characters

function findLongestSubstring(string){
    let longest = 0;
    let seen = {};
    let start = 0;
    for(let i = 0; i < string.length; i++){
        let char = string[i];
        if(seen[char]){
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 to include current in count
        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
    }
    return longest;
}

let string = "thisisawesome";
// result should be 6

console.log(findLongestSubstring(string))