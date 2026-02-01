
const message = document.getElementById("message");
const btn = document.getElementById("submit");


btn.addEventListener("click", () => {
     message.innerHTML = "";

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username === "" || password === ""){
        message.innerHTML = "<p id ='empty'>Please fill in all fields</p>";
        return
    }

    if(username === "Admin" && password === "1234"){
        message.innerHTML = "<p id ='success'>Login successful</p>"
    }else(
        message.innerHTML ="<p id ='error'>Invalid username or password</p>"
    )
})

