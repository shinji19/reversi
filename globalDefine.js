//マジックナンバー----------------------------------------
var BOARD_DEFINE = {
  x : 0,
  y : 0,
  w : 500,
  h : 500,
  cellSize : 500/8,
};
var COLOR_BLACK = "#000000";
var COLOR_WHITE = "#FFFFFF";
var STONE_RADIUS = BOARD_DEFINE.cellSize/2-5;
var DIRECTION = [-11, -10, -9, -1, 1, 9, 10, 11];
var END_OF_MAP = [0,1,2,3,4,5,6,7,8,15,16,23,24,31,32,39,40,47,48,55,56,57,58,59,60,61,62,63];
//----------------------------------------
//共通で使うボードの状態----------------------------------------
var boardState = {//ゲーム開始時の盤面の状態
  //盤面(0は何もない場所、1は白、-1は黒)
  map:
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
     5, 0, 0, 0, 0, 0, 0, 0, 0, 5,
     5, 0, 0, 0, 0, 0, 0, 0, 0, 5,
     5, 0, 0, 0, 0, 0, 0, 0, 0, 5,
     5, 0, 0, 0, 1, -1, 0, 0, 0, 5,
     5, 0, 0, 0, -1, 1, 0, 0, 0, 5,
     5, 0, 0, 0, 0, 0, 0, 0, 0, 5,
     5, 0, 0, 0, 0, 0, 0, 0, 0, 5,
     5, 0, 0, 0, 0, 0, 0, 0, 0, 5,
     5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
     ],
  turn: 1,
  revision: 0,
  selectedCell: 0,
};
var ctx = document.getElementById("canv").getContext('2d');       //ctx = カンバスをさすようにするお
//--------------------------------------------------------------------------------