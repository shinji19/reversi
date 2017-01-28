function reverse(){
  var boardState_cache;
  var selectedCell = boardState.selectedCell;
  var targetCell = boardState.selectedCell;
  var me = boardState.turn;
  var enemy;
  if(me == 1){enemy = -1;}
  if(me == -1){enemy = 1;}

  for(var iDir = 0; iDir <= 7; iDir++){ //全方向にむけてやります
    targetCell = selectedCell;            //初期化
    boardState_cache = $.extend(true, {}, boardState);  //初期化
    for(i = 0; i <= 10; i++){
      targetCell = targetCell + DIRECTION[iDir];    //次のマス(初回は隣。）に進む
      //進んだ先が盤の外だったら、何もせずに次の方向へ
      if(boardState_cache.map[targetCell] == 5) {break;}
      //進んだ先が空白だったら、何もせずに次の方向へ
      if(boardState_cache.map[targetCell] == 0) {break;}
      //進んだ先が、自分のコマだったら、反映！そして次の方向へ
      if(boardState_cache.map[targetCell] == me) {
        boardState = $.extend(true, {}, boardState_cache);
        break;}
      //進んだ先が、相手のコマだったら裏返す！
      if(boardState_cache.map[targetCell] == enemy) {
        boardState_cache.map[targetCell] = me;  //となりのマスを裏返す。
      }
    }
  }
}
