(function (global) {
  //Class Define
  function Board(){
    let _array = [];
    let _player;
    let _revision;
    let _boardStart;
    let _boardEnd;
    let _cellN;
    let _cellSize;
    let _evented = false;

    //setter
    Board.prototype.setArray = function (value,x,y){ _array[x][y] = value;}
    Board.prototype.setPlayer = function (player){ _player = player;}
    Board.prototype.setRevision = function (revision){ _revision = revision;}

    //getter
    Board.prototype.getArray = function (x,y){return _array[x][y];}
    Board.prototype.getPlayer = function (){ return _player;}
    Board.prototype.getRevision = function (){ return _revision;}
    Board.prototype.getStart = function (){ return _boardStart;}
    Board.prototype.getEnd = function (){ return _End;}
    Board.prototype.getCellN = function (){ return _cellN;}
    Board.prototype.getCellSize = function (){ return _cellSize;}
    Board.prototype.getEvented = function (){ return _evented;}

    //初期化er
    Board.prototype.init = function (start,end,cellN){
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
  global.Board = Board;
})((this || 0).self || global);
