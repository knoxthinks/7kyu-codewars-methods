
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