function findNeedle(arr){
    let position = arr.indexOf('needle')
    return `found the needle at position ${position}`
}

console.log(findNeedle(['hay','junk','needle']))