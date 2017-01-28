//---------------------------------------------------------------------------------
//ここでeventを追加するよ
function addEvent(){
  var ctx = document.getElementById("canv").getContext('2d');       //ctx = カンバスをさすようにするお
  canv.addEventListener('click',clicked);
}
//---------------------------------------------------------------------------------
//選択されたセルを boardState.selectedCell に反映するよ
function clicked(e){
    var canvasRect = canv.getBoundingClientRect();                    //カンバスが表示される位置を取得するお
    var cellX = (e.clientX - canvasRect.left)/BOARD_DEFINE.cellSize |0;
    var cellY = (e.clientY - canvasRect.top) /BOARD_DEFINE.cellSize |0;
    var cellNo = (cellX+1) + (cellY+1)*10;
    var CanPut = false;
    boardState.selectedCell = cellNo;

    if (JudgeCanPut()){   //石を置くことができるマスなら、"石を奥""裏返す""描写する"
      reverse();
      putStone();
      render();
    }
    else {
    }
}

//---------------------------------------------------------------------------------
//置かれた石を反映するよ
function putStone(){
  boardState.map[boardState.selectedCell] = boardState.turn;
  boardState.revision++;
  if (boardState.turn == 1){boardState.turn = -1}
  else {boardState.turn = 1}
}

//---------------------------------------------------------------------------------
