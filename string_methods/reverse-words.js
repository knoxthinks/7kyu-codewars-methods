
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(string){
    return string.split(' ')
                 .map(x => x.split('').reverse().join(''))
                 .join(' ')
  }
  
  
  //string, keep spaces
  //returns words in reverse but not the order
  
  //seperating the words into an array
  //reverse each in that array
  // make that array a single string
  
  console.log(reverseWords('This is an example'))
  //"This is an example!" would return "sihT si na !elpmaxe"

  //refactor 11/14/21
  function reverseWords(s){
    let newS = () => s.split(' ')
                        .map((x) => x.split('').reverse().join(''))
                        .join(' ')
    console.log(newS)
  }
  reverseWords('this is a string')
  //should return 'gnirts a si siht'