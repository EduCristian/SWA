//validation Function.
function validation(){
    var name = document.getElementById("input_name");
    var email = document.getElementById("input_email");
    var subject = document.getElementById("input_subject");
    var messag = document.getElementById("input_message");
    if (name.value === ""){
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    
    if (email.value === ""){
        window.alert("Please enter an e-mail address.");
        email.focus();
        return false;
    }
    
    // The email address is not tested with regex because it is just a security, but the only way to make sure
    // the email address is correct is enseding an email. Therefore, we decided to just make a very simple check
    // instead of a regex check (like the one using the RCF 2822 standard).
    if (email.value.indexOf("@", 0) < 0){
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    
    if (email.value.indexOf(".", 0) < 0){
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    
    if (subject.value === ""){
        window.alert("Please enter a subject for your enquiry.")
        subject.focus();
        return false;
    }
    
    if (messag.value === "") {
        window.alert("Please enter a message!");
        messag.focus();
        return false;
    }
    return true;
}

window.onload=function(){
    document.getElementById('id_form').addEventListener("submit", function(e)
    {
            event.preventDefault();
            console.log("call validate ");
            ValidateForm();
        console.log("validated");
            //write stuff
    });
}

/* Function to validate the whole form. Displays a confirmation message if the validation function (line 1) returns true */
function ValidateForm(){
        var name = document.getElementById("input_name").value;
        var email = document.getElementById("input_email").value;
            console.log("hey");
        if (validation()) // Calling validation function
        {
            console.log("hello");
            //document.getElementById("id_form").submit(); //form submission that we don't need for now
            window.confirm(" Name: " + name + " \n Email: " + email + " \n Subject: " + document.getElementById("input_subject").value + " \n Message: " + document.getElementById("input_message").value + "\n\n Confirm the submission");
        }
    
}