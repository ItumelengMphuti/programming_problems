function confirmEnding(str, target) {
    return str.slice(-target.length) === target //start slicing from the position that is target.length characters 
                                                //from the end of the string.
  }
  
  console.log(confirmEnding('Itumeleng', 'en'));