//------------------------------------------------------------------------------
//ここからRender部分
//------------------------------------------------------------------------------
(function (global) {
  //------------------------------------------------------------------------------
  //クラス
  //------------------------------------------------------------------------------
  function Render(){}
  //------------------------------------------------------------------------------
  //ヘッダー
  //------------------------------------------------------------------------------
  global.Render = Render;
  global.Render.render = render;
  //------------------------------------------------------------------------------
  //変数定義
  //------------------------------------------------------------------------------
  var ctx = document.getElementById("canv").getContext('2d');       //ctx = カンバスをさすようにするお
  var COLOR_BLACK = "#000000";
  var COLOR_WHITE = "#FFFFFF";
  var COLOR_LINE = "#FFFFFF";
  //------------------------------------------------------------------------------
  //Render関数の中の関数をここから下で定義している
  //------------------------------------------------------------------------------
  //------------------------------------------------------------------------------
  //canvansの描写を全部消す関数
  //------------------------------------------------------------------------------
  function clearCanv(_board_config){　　　　　　　　　　  //オセロ盤描写を一度全部消す
    var board_config = _board_config;
    ctx.clearRect(board_config.BOARD_SIZE.START, board_config.BOARD_SIZE.START, board_config.BOARD_SIZE.END, board_config.BOARD_SIZE.END);
  }
  //------------------------------------------------------------------------------
  //盤上の線を引く関数
  //------------------------------------------------------------------------------
  function DrawLine(_board_config){
    var board_config = _board_config;
    var CELL_SIZE = board_config.BOARD_SIZE.END/board_config.CELL_N;
    ctx.beginPath();
    for(var cnt = 0; cnt < board_config.CELL_N; cnt++){
      ctx.moveTo(cnt*CELL_SIZE, board_config.BOARD_SIZE.START);  //縦線始点
      ctx.lineTo(cnt*CELL_SIZE, board_config.BOARD_SIZE.END);    //縦線終点
      ctx.moveTo(board_config.BOARD_SIZE.START, cnt*CELL_SIZE);  //横線始点
      ctx.lineTo(board_config.BOARD_SIZE.END, cnt*CELL_SIZE);    //横線終点
    }
    ctx.closePath();
    ctx.stroke();
  }
  //------------------------------------------------------------------------------
  //石を置く関数 (どこに置くかは、arrayから引っ張ってくる)
  //------------------------------------------------------------------------------
  function DrawStone(_board,_player){
    var board = _board;                       //board.arrayをローカル関数"_array"に代入(ポインタ代入してるだけかも？)
    var player = _player;                      //player.blackをローカル関数(ry
    var CELL_SIZE = board.BOARD_SIZE.END/board.CELL_N;
    var STONE_RADIUS = (CELL_SIZE/2)-5;             //石の半径をここで計算
    //描写するよ！
    for(var cntX = 0; cntX < board.CELL_N ; cntX++){
      for(var cntY = 0; cntY < board.CELL_N ; cntY++){
        //------------------------------------------------------------------------------
        //石の色をここで決める。(1なら黒色)(-1なら白色)(0なら透明)
        //------------------------------------------------------------------------------
        switch (board.array[cntY][cntX]){
          case player.black.flag() :
            ctx.fillStyle = player.black.colors();
            break ;
          case player.white.flag() :
            ctx.fillStyle = player.white.colors();
            break ;
          case player.empty.flag() :
            ctx.fillStyle = player.empty.colors();
            break ;
        }
        //------------------------------------------------------------------------------
        //描写
        //------------------------------------------------------------------------------
        ctx.beginPath();
        ctx.arc((cntX+0.5)*CELL_SIZE, (cntY+0.5)*CELL_SIZE, STONE_RADIUS, 0, Math.PI*2,false);
        ctx.closePath();
        ctx.fill();
      }
    }
  }
  //------------------------------------------------------------------------------
  //上記の関数をまとめて、いっぺんに呼び出す関数
  //------------------------------------------------------------------------------
  function render(board_config,board,player){
    clearCanv(board_config);
    DrawLine(board_config);
    DrawStone(board,player);
  }
  //----------------------------------------------------------------------------
})((this || 0).self || global);
