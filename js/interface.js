// toggle class
$(document).ready(function() {
    $('.menu-button').on('click', function() {
        $('.links').slideToggle('medium', function() {
            if ($(this).is(':visible')) $(this).css('display', 'flex')
        })
    })

    window.addEventListener('resize', function(size) {
        if (window.innerWidth > 847) {
            $('.links').css('display', 'flex')
        } else {
            $('.links').css('display', 'none')
        }
    })
})

// on scroll
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('scroll')
    } else {
        $('nav').removeClass('scroll')
    }
})
