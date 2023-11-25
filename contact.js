var email = document.getElementById("email");
var emailErrorMessage = document.getElementById("email_validation");


email.addEventListener("input", function (e) {
  console.log(e.target.value);
  var pattern = /^[a-z0-9.]{1,64}@[a-z0-9]{1,64}[.][a-z0-9]{1,6}$/i;
  var currentValue = e.target.value;
  var valid = pattern.test(currentValue);

  if(valid){
    emailErrorMessage.style.display = 'none'
  } else {
    emailErrorMessage.style.display = "block";
  }
});
