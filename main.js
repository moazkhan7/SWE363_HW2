// add jQuery to html
// found: https://stackoverflow.com/questions/1140402/how-to-add-jquery-in-js-file
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


var student = {
    name: "",
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

function checkName() {
    var name = $('#name').val();
    var nameTest = new RegExp(/^[a-zA-Z ]{2,30}$/);
    var nameResult = nameTest.test(name);

    if (nameResult == false) {
        $('#name').next().removeClass("hide")
    }
    else {
        $('#name').next().addClass("hide")

        student.name = name;

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
