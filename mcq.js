var currentQuestion = 1

function next() {
    $('#question' + currentQuestion).addClass('hide')
    $('#question' + ++currentQuestion).removeClass('hide')

    if(currentQuestion > 1)
        $('#previousbtn').removeClass('hide')
    if(currentQuestion == 5)
        $('#nextbtn').addClass('hide')
};

function previous() {
    $('#question' + currentQuestion).addClass('hide')
    $('#question' + --currentQuestion).removeClass('hide')

    if(currentQuestion < 5)
        $('#nextbtn').removeClass('hide')
    if(currentQuestion == 1)
        $('#previousbtn').addClass('hide')
}