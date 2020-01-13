$(document).ready(function() {
    displaySkills()

    $('.menu-button').on('click', function() {
        $('.links').slideToggle('medium', function() {
            if ($(this).is(':visible')) $(this).css('display', 'flex')
        })
    })

    window.addEventListener('resize', function(size) {
        if (window.innerWidth > 1000) {
            $('.links').css('display', 'flex')
        } else {
            $('.links').css('display', 'none')
        }
    })

    shrinkLabels()
})

$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('scroll')
    } else {
        $('nav').removeClass('scroll')
    }
})

function displaySkills() {
    $.getJSON('../skills.json', function(data) {
        $.each(data, function(key, skill) {
            $('#skills-wrapper').append(
                `<div class='${skill.category} skill-card'><img src="${skill.logo}" alt="test" /><h1>${skill.name}</h1></div>`,
            )
        })
    })
}
