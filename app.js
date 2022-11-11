const loginID = document.getElementById("user_ID");
const loginPW = document.getElementById("user_PW");
const loginBtn = document.getElementById("Sign_In");
const signupBtn = document.getElementById("Sign_up");

function login() {
  const userID = loginID.value;
  const userPW = loginPW.value;
  console.log("user ID : " + userID + " user PW : " + userPW);
}

function moveToSignup() {
  location.replace("./signup.html");
}

loginBtn.addEventListener("click", login);
signupBtn.addEventListener("click", moveToSignup);
