document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate the credentials
    if (email === "empher@gmail.com" && password === "cepher@123") {
        alert("Login Success, you are redirecting to quiz page.");
        window.location.href = "quiz.html";
    } else {
        alert("Invalid email or password.");
    }
});