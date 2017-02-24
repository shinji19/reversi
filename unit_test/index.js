
(function(){

    // test result set
    let results = []

    // board.player test
    results.push((function(){
        let board = new boardClass();
        board.setPlayer(100);
        let player = board.getPlayer();
        if (player === 100) {
            return "OK: board.player"
        }
        else {
            return "NG: board.setPlayer(100); " +
                "board.getPlayer() expected 100, " +
                "but actual value is" + player;
        }
    }()));

    // board.revision test
    results.push((function(){
        let board = new boardClass();
        board.setRevision(1000);
        let revision = board.getRevision();
        if (revision === 1000) {
            return "OK: board.revision"
        }
        else {
            return "NG: board.setRevision(1000); " +
                "board.getRevision() expected 1000, " +
                "but actual value is" + revision;
        }
    }()));

    // test result report
    let reportString = "";
    results.forEach(function(value, index, array){
        reportString += "[" + (index+1) + "/" + results.length + "] " + value + "\n";
    });

    // output test result
    document.getElementById("test_result")
        .innerText="unit test result...\n" + reportString;

}());
