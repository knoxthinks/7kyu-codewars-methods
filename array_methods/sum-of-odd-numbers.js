function cubeOdd(array){
    //if any element is not == Number, return undefined.
    //get odd numbers
    let odd = array.filter(x => x % 2 !==0)
    //cube those numbers
    //console.log(odd)
   return (odd.reduce((current, element) => (current + element*element*element),0))
    // sum them
    
    
  }
  // console.log(fooSum([2,3,4,5,6]))
  //should return 27 + 125 = 152