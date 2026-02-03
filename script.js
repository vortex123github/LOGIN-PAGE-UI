const loginbutton = document.getElementById("loginBtn");
const message = document.getElementById("message");

loginbutton.addEventListener("click", () => {
message.innerHTML = "";
const useremail = document.getElementById("email").value.trim();
const userpassword = document.getElementById("password").value.trim();

if(useremail === "" || userpassword === ""){
  message.innerHTML= "<p class = 'error'>All fields are required</p>"
  return;
};


if(useremail === "random@gmail.com" && userpassword === "1234"){
  message.innerHTML = "<p class = 'success'>Login successful</p>"
}else{
  message.innerHTML = "<p class = 'error'>Invalid email or password</p>"
};


});


  

  