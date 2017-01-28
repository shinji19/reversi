function render(){
  //変数定義--------------------------------------------------------
  var ctx = document.getElementById("canv").getContext('2d');                   //ctx = カンバスをさすようにするお

  //--------------------------------------------------------
  (function drawLine() {
    //処理部分
    ctx.clearRect(0,0,500,500);                                                 //一旦書かれているのを全部消す
    ctx.beginPath();                                                            //憶える開始
    for(i = 0; i <= 8; i++){                                                    //全部の線を憶えるまでループ
      ctx.moveTo(i*BOARD_DEFINE.cellSize,0);                                    //横線開始点
      ctx.lineTo(i*BOARD_DEFINE.cellSize, 500);                                 //横線終了点
      ctx.moveTo(0, i*BOARD_DEFINE.cellSize);                                   //縦線開始点
      ctx.lineTo(500, i*BOARD_DEFINE.cellSize);                                 //縦線終了点
    }
    ctx.closePath();                                                            //憶える終わり
    ctx.stroke();                                                              　//覚えた線を全部書く
  })();

  (function drawStone(){                                                        //黒石を置く
    var cellX;                                                                  //マスの中心座標を求める用
    var cellY;                                                                  //マスの中心座標を求める用
    //黒石用ループ
    for (var i = 10;i <= 89; i++){                                              //全マス分ループ
      ctx.fillStyle = COLOR_BLACK;                                              //塗りつぶしスタイルを黒に設定
      if (boardState.map[i] != 1){continue;}                                    //黒石が置かれてなかったらスキップ
      cellX = ((i%10 -0.5)*BOARD_DEFINE.cellSize);                              //マスの中心座標を求める
      cellY = (((i/10|0) - 0.5)*BOARD_DEFINE.cellSize);                         //マスの中心座標を求める

      ctx.beginPath();                                                          //パス開始
      ctx.arc(cellX, cellY, STONE_RADIUS, 0,Math.PI*2,false);                   //石を記憶
      ctx.closePath();                                                          //記憶完了
      ctx.fill();                                                               //書く
    }

  //白石用ループ (説明省略)
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
