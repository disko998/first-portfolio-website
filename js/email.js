(function () {
    emailjs.init("user_D1UpaQA8ETmCPnkpp0JK9");
})();

var myform = $("#contact-form");
myform.submit(function(event){
    event.preventDefault();

    if (!checkInputs(this)) {
        showAlert('warning', 'You can\'t leave empty fields!')
        return
    }

    var service_id = "gmail";
    var template_id = "template_6ulzCFvD";

    $('#contact-form .send').text('Sending...')
    emailjs.sendForm(service_id, template_id, myform[0])
        .then(function(){ 
            clearInputs()
            showAlert('success', 'Thank you!')
        }, function(err) {
            console.log(err)
            clearInputs()
            showAlert('error', 'I\'m sleeping try again later!')
        });
    return false;
});

function checkInputs(form) {
    var status = true

    if (!form.name.value) {
        $("#contact-form #name").addClass('error')
        status = false
    } else {
        $("#contact-form #name").removeClass('error')
    }

    if(!form.email.value){
        $("#contact-form #email").addClass('error')
        status = false
    } else {
        $("#contact-form #email").removeClass('error')
    }

    if(!form.message.value){
        $("#contact-form #message").addClass('error')
        status = false
    } else {
        $("#contact-form #message").removeClass('error')
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

    setTimeout(function () {
        btn.removeClass(type)
        $('#contact-form .send').text('Send')
    }, 5000);
}

function clearInputs() {
    $('#name').val('')
    $('#email').val('')
    $('#message').val('')
}
