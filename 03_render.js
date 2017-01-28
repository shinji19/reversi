function render (){
  var ctx = document.getElementById("canv").getContext('2d');       //ctx = カンバスをさすようにするお
  var canvasRect = canv.getBoundingClientRect();                    //カンバスが表示される位置を取得するお

  var BOARD

  ctx.clearRect(0,0,500,500);                     //一旦書かれているのを全部消す
  ctx.beginPath();                                //憶える開始

  for(i = 0; i <= 8; i++){       //全部の線を憶えるまでループ
    ctx.moveTo(i*cell_size,0);                      //横線開始点
    ctx.lineTo(i*cell_size, 500);           //横線終了点
    ctx.moveTo(0, i*cell_size);                     //縦線開始点
    ctx.lineTo(500, i*cell_size);           //縦線終了点
  }

}
