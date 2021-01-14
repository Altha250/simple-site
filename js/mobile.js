/*
    $('body').on('click', function () {
        $('.mobileMenu').slideToggle(function () {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });
    });
*/
/*
$(document).ready(function () {

    $(".hamburger").click(function () {
        $(".mobileMenu").slideToggle(function () {
            $(".hamburger").hide();
            $(".rollup").show();
        });
    });

    $(".rollup").click(function () {
        $(".mobileMenu").slideToggle(function () {
            $(".hamburger").show();
            $(".rollup").hide();
        });
    });
});
*/

$(document).ready(function () {

    $(".hamburger").click(function () {
        $(".mobileMenu").slideToggle(function () {
            $(".hamburger").hide();
            $(".rollup").show();
            $(".flex-header-items").hide();
        });
    });

    $(".rollup").click(function () {
        $(".mobileMenu").slideToggle(function () {
            $(".hamburger").show();
            $(".rollup").hide();
            $(".flex-header-items").show();
        });
    });
});