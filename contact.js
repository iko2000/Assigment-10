const btnContact = document.querySelector("#btn-contact");
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#lastname");
const number = document.querySelector("#number");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

btnContact.addEventListener("click", function () {
 alert('Your personal info, Name: ' + firstName.value + " Last Name: " +
 lastName.value + " Email " + email.value + " Message: " + message.value);
});
