// function minMax(arr){
//     let result = [0,0]
//     return arr.sort((a,b) => a-b)
// }

// console.log(minMax([5,4,3,21,2,3,41231]))

function minMax(arr){
    let sorted = arr.sort((a,b) => a-b)
    return [sorted[0], sorted[sorted.length-1]]
}
console.log(minMax([5,4,3,21,2,3,41231]))