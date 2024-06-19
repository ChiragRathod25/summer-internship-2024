function canTravelTo(gameMatrix, fromRow, fromColumn, toRow, toColumn) {
    // Write your code here
    let rows=gameMatrix.length;
    let cols=gameMatrix[0].length;
    // console.log(fromRow)
    // console.log(fromColumn)
    // console.log(toRow)
    // console.log(toColumn)
    if(fromRow<0 || fromRow>rows || fromColumn<0||fromColumn>cols||toRow<0||toRow>rows||toColumn<0||toColumn>cols){
      return false;
    }
    
    while(fromRow!=toRow){
        if(fromRow<toRow){
            if(!gameMatrix[fromRow+1][fromColumn]) return false;
            else fromRow++; 
            if(fromRow>rows) return false;
        }
        else if(fromRow>toRow){
            if(!gameMatrix[fromRow-1][fromColumn]) return false;
            else fromRow--;
            if(fromRow<0) return false;
        }
    }
    while(fromColumn!=toColumn){
        if(fromColumn<toColumn) {
            if(!gameMatrix[toRow][fromColumn+1]) return false;
            else fromColumn++;
            if(fromColumn>cols) return false; 
        }
        else {
            if(gameMatrix[toRow][fromColumn-1]) return false;
            else fromColumn--;
            if(fromColumn<0) return false;
        }
    }
    // console.log(fromColumn,toColumn)
    return true;
  }
  
  const gameMatrix = [
    [false, true,  true,  false, false, false],
    [true,  true,  true,  false, false, false],
    [true,  true,  true,  true,  true,  true],
    [false, true,  true,  false, true,  true],
    [false, true,  true,  true,  false, true],
    [false, false, false, false, false, false],
  ];
  
  console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
  console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
  console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds