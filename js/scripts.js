$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});


// $(function() {
//     $('#reserveButton').click(function() {
//         const modalEl = $('#reserveModal');
//         // console.log('modalEl', modalEl)
//         modalEl.modal('show');
//         // console.log("reserveButton");
//     });
// });

$(function() {

    $("#reserveButton").click(function() {
        $("#reserveModal").modal("show");
    })

    $("#loginButton").click(function() {
        $("#loginModal").modal("show");
    })

});


