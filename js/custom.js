// owl carousel

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 50,
        nav: false,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1200: {
                items: 5,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
});

// active menu

$('.nav-item').click(function () {

    $('li.active').removeClass('active');
    $(this).addClass('active');

});

// menu
// ishlidi
// $(function () {
//     $('.navbar-toggler').on('click', function (e) {
//         e.preventDefault();
//         $(".left").show();
//     });

// });

$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".left").toggle()
    });
});