var student = {
    kfupm_id: "",
    email: ""
};

// 
function validateForm() {
    var valid = true;
    $(".err").each(function (index) {
        if (!$(this).hasClass("hide"))
            //alert(index + ": " + $(this).text());
            //  valid = false;
            valid = false;
    });
    if (valid){
        window.location.href = 'mcq.html';
    }
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
