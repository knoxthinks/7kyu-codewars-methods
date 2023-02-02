function countBy(multiple, number){
    let result = [];
    for(let i = 0; i<number; i++){
        result.push(i*multiple)
    }
    return result;
}

console.log(countBy(5,10))