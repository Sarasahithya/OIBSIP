let users = [];
document.getElementById('showRegister').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
});
document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});
document.getElementById('registerButton').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    users.push({ email, password });
    document.getElementById('registerMessage').textContent = "Registration successful! You can now log in.";
    document.getElementById('registerForm').reset();
});
document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert("Login successful! Welcome!");
        window.location.href = "secured.html"; 
    } else {
        document.getElementById('loginMessage').textContent = "Invalid email or password.";
    }
});