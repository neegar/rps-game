$("#hidden").hide()
var firebaseConfig = {
    apiKey: "AIzaSyDPI7TXsFfv1W45opH8ud1tnttBP9lef8M",
    authDomain: "rps-game-2934a.firebaseapp.com",
    databaseURL: "https://rps-game-2934a.firebaseio.com",
    projectId: "rps-game-2934a",
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
database.ref().on("value", function (snapshot) {
   // $("#player1-name").text("")
    var cv = snapshot.val()
    $("#player1-name").text(cv.player1.name)
    //$("#player2-name").text(cv.player2.name)
})
$("#start").on("click", function (event) {
    event.preventDefault();

    database.ref().once("value", function (snapshot) {
        console.log(snapshot.val().player1.name)
        console.log(snapshot.val().player2.name)
        if (!snapshot.val().player1.name) {
            var name = $(".input-name").val().trim()
            database.ref("player1").set({
                name: name
            })
        } else {
            var name = $(".input-name").val().trim()
            database.ref("player2").set({
                name: name
            })
        }

    })
})
        // console.log(database)
   // $("#player1-name").text(name)
//  })
