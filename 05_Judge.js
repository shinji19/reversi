function JudgeCanPut(){
  var turn = boardState.turn;
  var selectedCell = boardState.selectedCell;
  var targetCell = boardState.selectedCell;

  var flag1;
  var flag2;
  var me = turn;
  var enemy;

  if(turn == 1){enemy = -1;}
  if(turn == -1){enemy = 1;}


  //置こうとしている所に石が存在しているかどうか

  flag1 = (function check1(){
    if (boardState.map[selectedCell] != 0){
      return false;
    }
    else {return true;}
  })();

  //隣のセルに敵の石があるかどうか。そのあとに空きマスなしで自分の石があるかどうか
  flag2 = (function check2(){
    for(var iDir = 0; iDir <= 7; iDir++){
      // 隣のセルに敵の石がなかったら次のdirectionへ
      targetCell = selectedCell ; //初期化
      targetCell = targetCell + DIRECTION[iDir];
      if (boardState.map[targetCell] != enemy){
        continue;
      }
      //-----------------------------------------------
      //ここからしたは、隣の石が敵の石だった場合。
      for(i = 0; i <= 10; i++){
        targetCell = targetCell + DIRECTION[iDir];
        // 移動した先が、番兵だったら、falseを返す
        if(boardState.map[targetCell] == 5){
          break;}
        // 移動した先が空白マスでも、falseを返す
        if(boardState.map[targetCell] == 0){
          break;}
        // もし移動した先が、自分の石だった場合、trueを返す
        if(boardState.map[targetCell] == me){
          return true;}
        // もし移動した先が、敵の石だった場合、なにもしない。ループを続ける。
      }
    }
    //念のためfalse
    return false;
  })();

  if (flag1 == true && flag2 == true){return true}
  else {return false;}
}
