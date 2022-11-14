// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

function isAnagram(testString, original){
    let sortedOne = testString.toUpperCase().split('').sort().join('')
    console.log(sortedOne)
    let sortedTwo = original.toUpperCase().split('').sort().join('')
    console.log(sortedTwo)
    return sortedOne == sortedTwo ? true : false
  }
  
  // An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
  
  // Note: anagrams are case insensitive
  
  // Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
  
  //example "foefet" is an anagram of "toffee"
  
  //testString, split into an array
  // arrayOfLetters included in original string
  
  console.log(isAnagram('foefet','toffee'))
  //should return true
  
  //map every letter
  
  //capitalize

  //I GOT THIS ONE ON MY OWN TOO. AM I CODING!!??