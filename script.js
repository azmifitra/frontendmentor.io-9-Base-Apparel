
const form = document.querySelector('.container form');
const email = document.querySelector ('.container input[type=email]');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = email.value;

    if (validateEmail(emailValue)){
        document.getElementById("errorAlert").style.display="none";
        
    } else {
        document.getElementById("errorAlert").style.display="block";
    }
}
)

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}