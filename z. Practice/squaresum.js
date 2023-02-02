function squareSum(numbers){
    return numbers.reduce((acc,index) => acc + index**2)
}

console.log(squareSum([1,2,3,4,5,6]))

//**2 is squared