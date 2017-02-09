(function (global) {
  //Class Define
  function boardClass(){
    let _array = [];
    let _player;
    let _revision;
    let _boardStart;
    let _boardEnd;
    let _cellN;
    let _cellSize;
    let _evented = false;

    //setter
    boardClass.prototype.setArray = function (value,x,y){ _array[x][y] = value;}
    boardClass.prototype.setPlayer = function (player){ _player = player;}
    boardClass.prototype.setRevision = function (revision){ _revision = revision;}

    //getter
    boardClass.prototype.getArray = function (x,y){return _array[x][y];}
    boardClass.prototype.getPlayer = function (){ return _player;}
    boardClass.prototype.getRevision = function (){ return _revision;}
    boardClass.prototype.getStart = function (){ return _boardStart;}
    boardClass.prototype.getEnd = function (){ return _End;}
    boardClass.prototype.getCellN = function (){ return _cellN;}
    boardClass.prototype.getCellSize = function (){ return _cellSize;}
    boardClass.prototype.getEvented = function (){ return _evented;}

    //初期化er
    boardClass.prototype.init = function (start,end,cellN){
      _evented = true;
      _player = 1;
      _revision = 0;
      _boardStart = start;
      _boardEnd = end;
      _cellN = cellN;
      _cellSize = end / cellN;

       for(var x = 0; x < cellN; x++){
         _array[x] = new Array(cellN);
        for(var y = 0; y < cellN; y++){
          _array[x][y] = 0;
        }
      }
    }
  }
  // header
  global.boardClass = boardClass;
})((this || 0).self || global);
