var firebaseConfig = {
    apiKey: "AIzaSyDPI7TXsFfv1W45opH8ud1tnttBP9lef8M",
    authDomain: "rps-game-2934a.firebaseapp.com",
    databaseURL: "https://rps-game-2934a.firebaseio.com",
    projectId: "rps-game-2934a",
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var player1 = null;
var player2 = null;

database.ref().on("value", function (snapshot) {
    // $("#player1-name").text("")
    var cv = snapshot.val()

    if (cv) {
        if (cv.player1) {
            player1 = cv.player1;
            $("#player1-name").text(cv.player1.name)
        }

        if (cv.player2) {
            player2 = cv.player2;
            $("#player2-name").text(cv.player2.name)
        }
    }
})

$("#start").on("click", function (event) {
    event.preventDefault();

    if (!player1) {
        var name = $(".input-name").val().trim()
        database.ref("player1").set({
            name: name
        })
    } else if (!player2) {
        var name = $(".input-name").val().trim()
        database.ref("player2").set({
            name: name
        })
    }
})
        // console.log(database)
   // $("#player1-name").text(name)
//  })
