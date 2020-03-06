// add jQuery to html
// found: https://stackoverflow.com/questions/1140402/how-to-add-jquery-in-js-file
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


var student = {
    kfupm_id: "",
    email: ""
};

// 
function validateForm() {
    checkName();
    checkEmail();
    var valid = true;
    $(".err").each(function (index) {
        if (!$(this).hasClass("hide"))
            //alert(index + ": " + $(this).text());
            //  valid = false;
            valid = false;
    });
    return valid;
}

function checkID() {
    var id = $('#KFUPM_ID').val();
    var idTest = new RegExp(/^([sg]{1})([0-9]{9})$/);
    var idResult = idTest.test(id);

    if (idResult == false) {
        $('#KFUPM_ID').next().removeClass("hide")
    }
    else {
        $('#KFUPM_ID').next().addClass("hide")

        student.kfupm_id = id;

        return true;
    }

}

function checkEmail() {
    var email = $('#email').val();
    var emailTest = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    var emailResult = emailTest.test(email);

    if (emailResult == false) {
        $('#email').next().removeClass("hide")
    }
    else {
        $('#email').next().addClass("hide")

        student.email = email;

        return true;
    }

}

var quiz = {
    quizNumber: 0
};

function checkQuizSelection() {
    if ($('#quiz_menu').val() == "0")
        $('#quiz_menu').next().removeClass("hide");
    else
        $('#quiz_menu').next().addClass("hide");

    quiz.quizNumber = $('#items option:selected').value();
}
