// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	// your code
  return s.split('')
          .map((elem,index) => elem.toLowerCase().repeat(index+1))
          .map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))
          .join('-')
}

//brute forced this one