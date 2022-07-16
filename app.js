const userSignUpForm = document.querySelector("#sign-up"),
userName = document.querySelector("#username"),
email = document.querySelector("#email"),
password = document.querySelector("#password"),
userNameError = document.querySelector("#username-error"),
passwordError = document.querySelector("#password-error"),
emailError = document.querySelector("#email-error"),
prNumber = document.querySelector("#prnumber"),
prnumberError = document.querySelector("#prnumber-error"),
phoneNumber = document.querySelector("#phone"),
phoneError = document.querySelector("#Phone-error"),
possitionArea = document.querySelector("#position"),
possitionError = document.querySelector("#message-error")


function validateUserName() {
	if (!userName.validity.valid) {
		userName.classList.add("error");
		userNameError.textContent = "user name required";

		return false;
	} else {
		userNameError.textContent = "";
		userName.classList.remove("error");
		return true;
	}
}
function validateEmail() {
	if (!email.validity.valid) {
		email.classList.add("error");
		emailError.textContent = "email required";
		if (email.validity.typeMismatch) {
		emailError.textContent = "not valid email";
		}
	return false;
	} else {
	emailError.textContent = "";
	email.classList.remove("error");
	return true;}
}
function validatePassword() {
	if (password.value.length <= 4) {
	password.classList.add("error");
	passwordError.textContent = "password must be 4 or more charachter";
	return false;
	} else {
	passwordError.textContent = "";
	password.classList.remove("error");
	return true;}
}
function validatePrNumber() {
    if (!prNumber.value.length!== 11) {
    prNumber.classList.add("error");
    prNumber.textContent = "Check your personal number";
        return false;
    } else {
    prNumber.textContent = "";
    prNumber.classList.remove("error");
    return true;}
}
function validatePhoneNumber() {
    if (!phoneNumber.value.length !== 9) {
    phoneNumber.classList.add("error");
    phoneNumber.textContent = "Check the correctness of the number";
      return false;
     } else {
    phoneNumber.textContent = "";
    phoneNumber.classList.remove("error");
    return true;}
}
function validatePossitionArea() {
    if (possitionArea.value.length > 30) {
    possitionArea.classList.add("error");
    possitionArea.textContent = "only allowed 30 characters";
      return false;
    } else {
    possitionArea.textContent = "";
    possitionArea.classList.remove("error");
      return true;
    }
  }
  
userName.addEventListener("input", (e) => {
	validateUserName();
});
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
prNumber.addEventListener("input", validatePrNumber);
phoneNumber.addEventListener("input", validatePhoneNumber);
possitionArea.addEventListener("textarea", validatePossitionArea);

userSignUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValidUserName = validateUserName();
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    const isValidPrNumber = validatePrNumber();
    const isValidPhoneNumber = validatePhoneNumber();
    const isValiPossitionArea = validatePossitionArea();
});
if (
    isValidUserName &&
    isValidEmail &&
    isValidPassword &&
    isValidPrNumber &&
    isValidPhoneNumber &&
    isValiPossitionArea 
    ) {
    const userInfo = {
      userName: userName.value,
      email: email.value,
      password: password.value,
      prNumber: prNumber.value,
      phoneNumber: phoneNumber.value,
      possitionArea: possitionArea.value,
    }
}