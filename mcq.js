var currentQuestion = 1

function next() {
    if(currentQuestion == 5 && window.location.pathname.split('/').pop() == 'mcq.html'){
        window.location.href = 'mcq_checkBox.html';
    }

    $('#question' + currentQuestion).addClass('hide')
    $('#question' + ++currentQuestion).removeClass('hide')

    if(currentQuestion > 1)
        $('#previousbtn').removeClass('hide')
};

function previous() {
    if(currentQuestion == 1 && window.location.pathname.split('/').pop() == 'mcq_checkBox.html'){
        window.location.href = 'mcq.html';
    }

    $('#question' + currentQuestion).addClass('hide')
    $('#question' + --currentQuestion).removeClass('hide')

    if(currentQuestion < 5)
        $('#nextbtn').removeClass('hide')
}