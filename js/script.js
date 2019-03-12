$(document).ready(function() {
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#qodef-back-to-top').fadeIn();
        } else {
            $('#qodef-back-to-top').fadeOut();
        }
    });
    $(document).ready(function() {
        $("#qodef-back-to-top").click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    
    });
})