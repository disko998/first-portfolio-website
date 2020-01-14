$(document).ready(function() {
    displaySkillsList()
    displayProjectsList()

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

    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('nav').addClass('scroll')
        } else {
            $('nav').removeClass('scroll')
        }
    })
})

function displaySkillsList() {
    $.getJSON('../skills.json', function(data) {
        $.each(data, function(key, skill) {
            $('#skills-wrapper').append(
                `<div class='${skill.category} skill-card'><img src="${skill.logo}" alt="test" /><h1>${skill.name}</h1></div>`,
            )
        })
    })
}

function displayProjectsList() {
    $.getJSON('../projects.json', function(data) {
        $.each(data, function(key, project) {
            $('#projects-wrapper').append(`
                <a class="${project.category}" href="${project.link}" target="_blank">
                    <div class="project d-flex f-center">
                        <div class="overlay f-center">
                            <p>${project.name}</p>
                        </div>
                        <img src="${project.src}" alt="${project.name} logo" />
                    </div>
                </a>
            `)
        })
    })
}
