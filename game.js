function Render(){}
//ボードのクラス定義
function board(){
  // 盤上の状態保持
  var array = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
  ];
  //どっちのプレイヤーが次に打つか保持
  var player = 1;
  //getter
  //this.getStone = function(y,x){ return array[y][x] };
  this.getStone = function (){ return array; }
  //setter
  this.setStone = function(y,x,player){ array[y][x] = player; };
  //初期化er
  this.initState = function(){
    this.setStone(3,3,-1);
    this.setStone(2,2,-1);
    this.setStone(2,3,1);
    this.setStone(3,2,1);
  }
}
//ボードのインスタンス化
var board = new board();

board.initState();
alert(board.getStone());

//------------------------------------------------------------------------

// Function Render(){}
// (function (){
//   //変数定義
//   var celllNo = 8;
//   var Boardsize = {
//     start : 0;
//     end : 500;
//   };
//   var
//   function clearCanv{　　　　　　　　　　  //オセロ盤描写を一度全部消す
//     ctx.clearRect(0,0,500,500);
//   }
//
//   function DrawLine(){
//
//   }
//
// })();
