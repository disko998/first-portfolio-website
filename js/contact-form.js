;(function() {
    emailjs.init('user_D1UpaQA8ETmCPnkpp0JK9')
})()

var myform = $('#contact-form')

myform.submit(function(event) {
    event.preventDefault()

    if (!isInputsValid(this)) {
        showAlert('warning', 'Some fields are empty!')
        return
    }

    var service_id = 'gmail'
    var template_id = 'template_6ulzCFvD'

    $('#contact-form .send').text('Sending...')
    emailjs.sendForm(service_id, template_id, myform[0]).then(
        function() {
            clearInputs()
            showAlert('success', 'Message successfully sent!')
        },
        function(err) {
            console.log(err)
            showAlert('error', "Something's wrong, try again later!")
        }
    )
    return false
})

function isInputsValid(form) {
    var status = true

    if (!form.name.value) {
        $('label[for="name"]').addClass('error')
        status = false
    } else {
        $('label[for="name"]').removeClass('error')
    }

    if (!form.email.value) {
        $('label[for="email"]').addClass('error')
        status = false
    } else {
        $('label[for="email"]').removeClass('error')
    }

    if (!form.message.value) {
        $('label[for="message"]').addClass('error')
        status = false
    } else {
        $('label[for="message"]').removeClass('error')
    }

    return status
}

function showAlert(type, text) {
    var btn = $('#contact-form .send')

    btn.removeClass('success')
    btn.removeClass('error')
    btn.removeClass('warning')

    btn.addClass(type)
    btn.text(text)

    setTimeout(function() {
        btn.removeClass(type)
        $('#contact-form .send').text('Send')
    }, 3000)
}

function clearInputs() {
    $('#name').val('')
    $('#email').val('')
    $('#message').val('')
}
