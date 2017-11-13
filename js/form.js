//validation Function.
function validation(){
    var name = document.getElementById("input_name");
    var email = document.getElementById("input_email");
    var subject = document.getElementById("input_subject");
    var messag = document.getElementById("input_message");
    
    if (name.value === ""){
        name.setCustomValidity("Please enter your name.");
        console.log("Check the name");
        name.focus();
    } else {
        name.setCustomValidity('');
    }
    
    if (email.value === ""){
        email.setCustomValidity("Please enter an e-mail address.");
                console.log("Check the email");
        email.focus();
    } else {
        email.setCustomValidity('');
    }
    
    // The email address is not tested with regex because it is just a security, but the only way to make sure
    // the email address is correct is sending an email. Therefore, we decided to just make a very simple check
    // instead of a regex check (like the one using the RCF 2822 standard).
    if (email.value.indexOf("@", 0) < 0){
        email.setCustomValidity("Please enter a valid e-mail address.");
        email.focus();
    } else {
        email.setCustomValidity('');
    }
    
    if (email.value.indexOf(".", 0) < 0){
        email.setCustomValidity("Please enter a valid e-mail address.");
        email.focus();
    } else {
        email.setCustomValidity('');
    }
    
    if (subject.value === ""){
        subject.setCustomValidity("Please enter a subject for your enquiry.")
        subject.focus();
    } else {
        subject.setCustomValidity('');
    }
    
    if (messag.value === "") {
        messag.setCustomValidity("Please enter a message!");
        messag.focus();
    } else {
        messag.setCustomValidity('');
    }
}

var form = document.getElementById('id_form');
var submitButton = document.getElementById('input-submit');

submitButton.onclick = function () { ValidateForm(); };

/* Function to validate the whole form. Displays a confirmation message if the validation function (line 1) returns true */
function ValidateForm(){
            console.log("hey");
        var valid = validation(); // Calling validation function

            console.log("hello");
            //document.getElementById("id_form").submit(); //form submission that we don't need for now
            window.confirm(" Name: " + document.getElementById("input_name").value 
                           + " \n Email: " + document.getElementById("input_email").value 
                           + " \n Subject: " + document.getElementById("input_subject").value 
                           + " \n Message: " + document.getElementById("input_message").value + "\n\n Confirm the submission");
}