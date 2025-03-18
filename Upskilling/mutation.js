function mutation(arr) {
    let [firstStr, secondStr] = arr.map(str => str.toLowerCase());
  
    for(let i = 0; i < secondStr.length; i++) {
      if (firstStr.indexOf(secondStr[i]) === -1) {
        return false;
      }
    }
    
    return true;
  }
  
  mutation(['hello', 'hey']);