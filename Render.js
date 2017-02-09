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
  global.Render.clearCanv = clearCanv;
  global.Render.DrawLine = DrawLine;
  global.Render.DrawStone = DrawStone;
  //------------------------------------------------------------------------------
  //変数定義
  //------------------------------------------------------------------------------
  var COLOR_BLACK = "#000000";
  var COLOR_WHITE = "#FFFFFF";
  var COLOR_LINE = "#FFFFFF";
  //------------------------------------------------------------------------------
  //Render関数の中の関数をここから下で定義している
  //------------------------------------------------------------------------------
  //------------------------------------------------------------------------------
  //canvansの描写を全部消す関数
  //------------------------------------------------------------------------------
  function clearCanv(_ctx, _start, _end){　　　　　　　　　　  //ctx,オセロ盤の起点座標、オセロ盤の終点座標
    var ctx = _ctx;
    var start = _start;
    var end = _end;
    ctx.clearRect(start,start,end,end);
  }
  //------------------------------------------------------------------------------
  //盤上の線を引く関数
  //------------------------------------------------------------------------------
  function DrawLine(_ctx, _start, _end, _CELL_N, _CELL_SIZE){ //xtx,盤の起点、盤の終点、セルの数、セルのサイズ
    var ctx = _ctx;
    var start = _start;
    var end = _end;
    var CELL_N = _CELL_N;
    var CELL_SIZE = _CELL_SIZE;
    ctx.beginPath();
    for(var cnt = 0; cnt < CELL_N; cnt++){
      ctx.moveTo(cnt*CELL_SIZE, start);  //縦線始点
      ctx.lineTo(cnt*CELL_SIZE, end);    //縦線終点
      ctx.moveTo(start, cnt*CELL_SIZE);  //横線始点
      ctx.lineTo(end, cnt*CELL_SIZE);    //横線終点
    }
    ctx.closePath();
    ctx.stroke();
  }
  //------------------------------------------------------------------------------
  //石を置く関数 (どこに置くかは、arrayから引っ張ってくる)
  //------------------------------------------------------------------------------
  function DrawStone(_ctx, _array, _CELL_SIZE, _black, _white){ //ctx,オセロ配列、マスのサイズ、
    var ctx = _ctx;
    var array = _array;
    var CELL_SIZE = _CELL_SIZE;
    var black = _black;
    var white = _white;
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
  function render(ctx,board,player){
    Render.clearCanv(ctx, board.BOARD_START, board.BOARD_END);
    Render.DrawLine(ctx, board.BOARD_START, board.BOARD_END, board.CELL_N, board.CELL_SIZE);
    Render.DrawStone(ctx, board.array, board.CELL_SIZE, player.black, player.white);
  }
  //----------------------------------------------------------------------------
})((this || 0).self || global);
