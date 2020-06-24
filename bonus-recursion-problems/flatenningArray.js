

function flattenArray(array){
    let newArray = [];

    function recursiveFlatten(newArr){
        for(let i = 0; i < newArr.length; i++){
            if(Array.isArray(newArr[i])){
                recursiveFlatten(newArr[i])
            }else {
                newArray.push(newArr[i])
            }
        }
    }
    recursiveFlatten(array)
    
    return newArray
}
let testArray = [[1, 2], 3, [4, [[5]]]];

console.log(flattenArray(testArray))