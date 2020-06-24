// write a function called reverse which accepts a string and returns a new string in reverse

function reverse(string){
    let splitString = string.split("");
    let reversedString = [];
    function recursiveReverse(stringArr){
        if(stringArr.length === 0){
            return
        }
        let lastChar = stringArr.pop()
        reversedString.push(lastChar);
        return recursiveReverse(stringArr)
    }
    recursiveReverse(splitString)

    console.log(reversedString.join(""))

}

reverse("hi there")

// come back and review this with recursion