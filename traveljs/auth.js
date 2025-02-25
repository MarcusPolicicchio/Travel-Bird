// Register Function
function register() {
    let username = document.getElementById("registerUsername").value;
    let password = document.getElementById("registerPassword").value;

    if (username === "" || password === "") {
        alert("Please enter a username and password");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("User already exists! Try another username.");
        return;
    }

    localStorage.setItem(username, password);
    alert("Registration successful! Please login.");
}

// Login Function
function login() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert("Login successful!");
        window.location.href = "routes.html";  // Redirect to routes page
    } else {
        alert("Invalid username or password");
    }
}
