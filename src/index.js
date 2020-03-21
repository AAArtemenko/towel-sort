module.exports = function towelSort (matrix) {
  if (matrix != undefined){
    let check = true;
    matrix.forEach(element => {
      if (!check) {
        check = true;
        return element.reverse();       
      }      
      check = false;  
      return element;    
    });
    return matrix.flat();
  }
  return [];
}