const signupForm = document.querySelector(".sign-up form");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordMatchTextEl = document.querySelector(".password-match");

function handlePassword() {
	const password = passwordInput.value;
	const passwordConfirm = confirmPasswordInput.value;
	const isMatch = password === passwordConfirm;

	if (passwordInput.validity.patternMismatch) {
		passwordInput.setCustomValidity(
			"Weak Password: Needs 8+ characters with an uppercase letter and a number.",
		);
	}

	passwordInput.classList.toggle("invalid", !isMatch);
	confirmPasswordInput.classList.toggle("invalid", !isMatch);
	passwordMatchTextEl.classList.toggle("hidden", isMatch);
}

passwordInput.addEventListener("input", handlePassword);
confirmPasswordInput.addEventListener("input", handlePassword);

signupForm.addEventListener("submit", (e) => {
	const password = passwordInput.value;
	const passwordConfirm = confirmPasswordInput.value;

	if (password !== passwordConfirm) {
		e.preventDefault();
	} else {
		console.log("Sign Up");
	}
});
