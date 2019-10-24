
function check() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var validName = name.match(/^[a-zא-ת]+(\s[a-zא-ת]+)*$/i);
    var validEmail = email.match(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
    var validNum = phone.match(/^0[2-9]\d{7,8}$/);
    var error = "";
  
    if (!validName || !validEmail || !validNum) {
        error = "please fill the form correctly";
        document.getElementById("errors").innerHTML = error;
        

    } else {
        var toThanks = "thanks.html";

        window.location.href = toThanks;
    }



}


