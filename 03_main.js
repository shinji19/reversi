
//---------------------------------------------------------------------------------
function addEvent(){
  var ctx = document.getElementById("canv").getContext('2d');       //ctx = カンバスをさすようにするお
  canv.addEventListener('click',getSelectedCell);
}
//---------------------------------------------------------------------------------
//選択されたセルを boardState.selectedCell に反映するよ
function getSelectedCell(e){
    var canvasRect = canv.getBoundingClientRect();                    //カンバスが表示される位置を取得するお
    var cellX = (e.clientX - canvasRect.left)/BOARD_DEFINE.cellSize | 0 ;
    var cellY = (e.clientY - canvasRect.top) /BOARD_DEFINE.cellSize | 0 ;
    var cellNo = cellX + cellY*8;
    boardState.selectedCell = cellNo;

    var CanPut = JudgeCanPut();
    alert(CanPut);
    if (CanPut == true){
      putStone();
      render();

    }
}

//---------------------------------------------------------------------------------

function putStone(){
  boardState.map[boardState.selectedCell] = boardState.turn;
  boardState.revision++;
  if (boardState.turn == 1){boardState.turn = -1}
  else {boardState.turn = 1}
}

//---------------------------------------------------------------------------------
function JudgeCanPut(){
  var turn = boardState.turn;
  var cellNo = boardState.selectedCell;

  //まず、すでに石が置かれているときのエラー-----------------------------------------------
  if (boardState.map[cellNo] != 0){
    alert('you cannnot');
    return false;
  }
  //---------------------------------------------------------------------------------

  iDir = 4; // あとでループさせる。
  cellNo = cellNo+DIRECTION[iDir];
  //まず隣のセルが相手の石じゃないときにエラーを返す-----------------------------------------
  if (boardState.map[cellNo] == turn || boardState.map[cellNo] == 0){
    return false;
  }
  //---------------------------------------------------------------------------------

  //ボードの終端までいって、自分の石があったらOK、なかったらエラーを返す---------------------------------------------------------------------------------
  for (var i = 0; i <=100 ; i++){
    cellNo++;
    //もし石がなかったらエラー
    if (boardState.map[cellNo] == 0){return false;}
    //自分の石があったらおk
    if (boardState.map[cellNo] == turn){return true;}

    //もし、相手の石だった場合は次のところまで観に行くので続行

    //もし、いま観た石が端石の場合、エラー
    //(端石が自分の石の場合は上でおkが帰っているはずなので)

    for(var iEnd = 0; iEnd <= 27; iEnd++){
      if (cellNo == END_OF_MAP[iEnd]){return false;}
    }
  }
}


//---------------------------------------------------------------------------------

(function mainProcess(){
  render();
  addEvent();
})();
