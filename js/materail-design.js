;(function($, window, document, undefined) {
    'use strict'

    var $ripple = $('.js-ripple')

    $ripple.on('click.ui.ripple', function(e) {
        var $this = $(this)
        var $offset = $this.parent().offset()
        var $circle = $this.find('.c-ripple__circle')

        var x = e.pageX - $offset.left
        var y = e.pageY - $offset.top

        $circle.css({
            top: y + 'px',
            left: x + 'px',
        })

        $this.addClass('is-active')
    })

    $ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
        $(this).removeClass('is-active')
    })
})(jQuery, window, document)
;(function shrinkLabels() {
    const contactInputs = $('#contact-form .form-input')
    for (let input of contactInputs) {
        input.addEventListener('change', function() {
            const label = this.nextSibling.nextSibling
            if (this.value.length) {
                label.classList.add('shrink')
            } else {
                label.classList.remove('shrink')
            }
        })
    }
})()
