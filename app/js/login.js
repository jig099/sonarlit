const { remote } = require('electron')
const { BrowserWindow } = remote
const Firebase = require('../components/Firebase/firebase.js');
const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const realSignUpButton = document.getElementById('rSignUp');
const realSignInButton = document.getElementById('rSignIn');
const signUpEmail = document.getElementById('signUpEmail');
const signUpPassword = document.getElementById('signUpPassword');
const signInEmail = document.getElementById('signInEmail');
const signInPassword = document.getElementById('signInPassword');

//initialize the fb 
let fb = new Firebase();

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

realSignInButton.addEventListener('click',() => {
	fb.doSignInWithEmailAndPassword(signInEmail.value,signInPassword.value).then(function(result) {
		// result.user.tenantId should be ‘TENANT_PROJECT_ID’.
		console.log("Sign in successfully")
		remote.getCurrentWindow().loadFile('./app/html/mainframe.html')
	  }).catch(function(error) {
		// Handle error.
		console.log(error)
	  });
})

realSignUpButton.addEventListener('click', () => {
	fb.doCreateUserWithEmailAndPassword(signUpEmail.value,signUpPassword.value).then(function(result) {
		// result.user.tenantId should be ‘TENANT_PROJECT_ID’.
		console.log(result.user)

	  }).catch(function(error) {
		// Handle error.
		console.log(error)
	  });
})