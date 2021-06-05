const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("Email");
const phone = document.getElementById("Phone");
const password = document.getElementById("Password");
const cpassword = document.getElementById("Confirm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  Validate();
});

var sendData = (usernameValue,sRate,count) => {
  if(sRate === count){
    alert("registration sucsessfull");
    swal("welcome! "+ usernameValue +" registration successfull","success");
  }

}

const successMsg = (usernameValue) =>{
  let formCon = document.getElementsByClassName('form-control');
  var count = formCon.length - 1;  
  for (let i = 0; i < formCon.length; i++) {
    if (formCon[i].className === 'form-control success') {
      var sRate = 0 + i;
      sendData(usernameValue,sRate,count);
    }else{
      return false;
    }
    
  }

 }

const isEmail = (emailValue) => {
    var atsymbol = emailValue.indexOf("@");
    if(atsymbol < 1) return false;
    var dot = emailValue.lastIndexOf(".");
    if(dot <= atsymbol + 2) return false;
    if(dot === emailValue.length - 1) return false;
    return true;
}

const Validate = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const cpasswordValue = cpassword.value.trim();

  if (usernameValue === "") {
    setErrorMsg(username, "username cannot be empty");
  } else if (usernameValue.length <= 2) {
    setErrorMsg(username, "username must be min 3 char");
  } else{
      setSuccessMsg(username);
  }
  
  if (emailValue === "") {
    setErrorMsg(email, "email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorMsg(email, "not a valid email");
  } else{
      setSuccessMsg(email);
  }

  if (phoneValue === "") {
    setErrorMsg(phone, "phone number cannot be empty");
  } else if (phoneValue.length != 10) {
    setErrorMsg(phone, "not a valid phone number");
  } else{
      setSuccessMsg(phone);
  }

  if (passwordValue === "") {
    setErrorMsg(password, "password cannot be empty");
  } else if (passwordValue.length <= 5) {
    setErrorMsg(password, "min 6 char");
  } else{
      setSuccessMsg(password);
  }

  if (cpasswordValue === "") {
    setErrorMsg(cpassword, "confirm password cannot be empty");
  } else if (cpasswordValue != passwordValue) {
    setErrorMsg(cpassword, "password not matching");
  } else{
      setSuccessMsg(cpassword);
  }

  successMsg(usernameValue);
};
function setErrorMsg(input,errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = errormsgs;
}
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}