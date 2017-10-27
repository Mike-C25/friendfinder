$(document).ready(function() {
    $("#submit").on('click', function(e) {
        e.preventDefault();
        var newSurvey = {
            name: $("#name").val().trim(),
            picture: $("#photo").val().trim(),
            scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
        }
        console.log(newSurvey);

        $.ajax("/api/friends", {
            type: "POST",
            data: newSurvey
        }).done(function(res) {
            $.ajax({
                type: "GET",
                url: "/api/friends"
            }).done(function(dat) {
                console.log("getting Results...");
                console.log(dat);
                for (user in dat) {

                }
            })

        });
    });
});