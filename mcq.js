var currentQuestion = 1

function next() {
    $('#question' + currentQuestion).addClass('hide')
    $('#question' + ++currentQuestion).removeClass('hide')    
};