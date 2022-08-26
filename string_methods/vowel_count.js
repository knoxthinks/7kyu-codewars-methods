// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//atempt 1

function fooVowel(string){
    //return count of vowels
    //parameter is a string
    // only lowercase
    // an example?
    //"richard" would return 1.
    //"hired" would return 2
  let vowels = ["a","e","i","o","u"]
  return string.match(vowels).length()
  }
  fooVowel('richard')
  fooVowel('hired')

  //answer
//   function getCount(str) {
//     var vowelsCount = 0;
//     var vowels = ["a","e","i","o","u"];
//     for(var i = 0;i < str.length;i++){
//       for(var j=0;j<vowels.length;j++){
//         if(str[i] === vowels[j]){
//           vowelsCount++;
//         }
//       }
//     }
    
//     return vowelsCount;
//   }