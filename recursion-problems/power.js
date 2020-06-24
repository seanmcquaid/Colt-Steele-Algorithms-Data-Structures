// write a function called power that accepts a base and an exponent. The function should return the power of the base to the exponent
// this function should mimic math.pow
// don't worry about negative bases/exponents

function power(num, exponent){
    if(exponent === 0){
        return 1
    }
    return num * power(num, exponent - 1)
}

console.log(power(2,3));