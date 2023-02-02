function geesefilter(array){
    var geese = ['bunch','of','geese']
    return array.filter(birds => geese.include(birds))

}
// is geese.includes(bird) true?
//if so return,filter that to the new arry.