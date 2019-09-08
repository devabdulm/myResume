
const validateForm = () => {
    let name = document.forms["contForm"]["Name"];
    let title = document.forms["contForm"]["Title"];
    let email = document.forms["contForm"]["Email"];
    let message = document.forms["contForm"]["Message"];

    if (name.value == "" || name.value.length < 4 ){
        window.alert("Please enter atleast 4 letter name!");
        name.focus();
        return false;
    } 

    if (email.value == ""){
        window.alert("Enter email please!");
        name.focus();
        return false;
    }
    if (title.value == ""){
        window.alert("Enter title please!");
        name.focus();
        return false;
    }
    if (message.value == "" || message.value.length < 19){
        window.alert("Enter a 20 character message please!");
        name.focus();
        return false;
    }
};




