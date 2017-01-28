function JudgeCanPut(){
  var turn = boardState.turn;
  var selectedCellNo = boardState.selectedCell;
  var JudgedCellNo = boardState.selectedCell;
  var flag = false;

  //置こうとしている所に石が存在しているかどうか
  if (boardState.map[selectedCellNo] != 0){
    alert('stone is already exist');
    flag = false;
    exit;
  }
  flag = true;
  return flag;

  for(var iDir = 0; iDir <=7; i++){


  }


}
