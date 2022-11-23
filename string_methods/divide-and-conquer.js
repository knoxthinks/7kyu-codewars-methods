// DESCRIPTION:
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

function divCon(array){
    let nums = array.filter(x => Number.isInteger(x)).reduce((a,b) => a+b,0)
  console.log(nums)
    
    let strNums = array.filter(x => typeof x == 'string').map(x => x - 0).reduce((a,b) => a+b,0)
    console.log(strNums)
  
  
    return strNums -= nums
  }
  
  
  console.log(divCon([2,4,6,'8','9']))
  //should return 17 -12, 5