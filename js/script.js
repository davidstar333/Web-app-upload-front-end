$(document).ready(function() {
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#qodef-back-to-top').fadeIn();
        } else {
            $('#qodef-back-to-top').fadeOut();
        }
    })
    $("#qodef-back-to-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
    $('#signup').click(function() {
        $("#signup-modal").modal();
    })
    $('#signin').click(function() {
        $("#signin-modal").modal();
    })
    $("#to-signin").click(function(e) {
        e.preventDefault();
        $("#signup-modal").modal('hide');
        $("#signin-modal").modal('show');
    })
    $("#to-signup").click(function(e) {
        e.preventDefault();
        $("#signin-modal").modal('hide');
        $("#signup-modal").modal('show');
    })
})