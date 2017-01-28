function render(){
  //変数定義--------------------------------------------------------
  var ctx = document.getElementById("canv").getContext('2d');       //ctx = カンバスをさすようにするお

  //--------------------------------------------------------
  (function drawLine() {
    //処理部分
    ctx.clearRect(0,0,500,500);                     //一旦書かれているのを全部消す
    ctx.beginPath();                                //憶える開始
    for(i = 0; i <= 8; i++){       //全部の線を憶えるまでループ
      ctx.moveTo(i*BOARD_DEFINE.cellSize,0);                      //横線開始点
      ctx.lineTo(i*BOARD_DEFINE.cellSize, 500);           //横線終了点
      ctx.moveTo(0, i*BOARD_DEFINE.cellSize);                     //縦線開始点
      ctx.lineTo(500, i*BOARD_DEFINE.cellSize);           //縦線終了点
    }
    ctx.closePath();                                //憶える終わり
    ctx.stroke();                                   //覚えた線を全部書く
  })();

  (function drawStone(){
    var cellX;
    var cellY;
    for (var i = 10;i <= 89; i++){
      if (boardState.map[i] != 1){continue;}
      ctx.fillStyle = COLOR_BLACK;
      cellX = ((i%10 -0.5)*BOARD_DEFINE.cellSize);
      cellY = (((i/10|0) - 0.5)*BOARD_DEFINE.cellSize);

      ctx.beginPath();
      ctx.arc(cellX, cellY, STONE_RADIUS, 0,Math.PI*2,false);
      ctx.closePath();
      ctx.fill();
    }

  for (var i = 10;i <= 89; i++){
    if (boardState.map[i] != -1){continue;}
    ctx.fillStyle = COLOR_WHITE;
    cellX = ((i%10 -0.5)*BOARD_DEFINE.cellSize);
    cellY = (((i/10|0) - 0.5)*BOARD_DEFINE.cellSize);

    ctx.beginPath();
    ctx.arc(cellX, cellY, STONE_RADIUS, 0,Math.PI*2,false);
    ctx.closePath();
    ctx.fill();
  }
})();


}
