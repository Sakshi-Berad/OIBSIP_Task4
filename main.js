const users = [];

const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const regUsername = document.getElementById('reg-username').value;
    const regPassword = document.getElementById('reg-password').value;
    
    if (users.some(user => user.username === regUsername)) {
        alert('Username already exists. Please choose another one.');
    } else {
        const hashedPassword = hashPassword(regPassword);
        users.push({ username: regUsername, password: hashedPassword });
        alert('Registration successful! You can now log in.');
        clearForm(registerForm);
    }
});




const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;
    
    const user = users.find(user => user.username === loginUsername);
    
    if (user && comparePasswords(loginPassword, user.password)) {
        showSecuredPage(user.username);
        clearForm(loginForm);
    } else {
        alert('Invalid username or password. Please try again.');
    }
});



function hashPassword(password) {
    return password; 
}

function comparePasswords(plainPassword, hashedPassword) {
    return plainPassword === hashedPassword;
}

function showSecuredPage(username) {
    document.getElementById('secured-page').style.display = 'block';
    document.getElementById('secured-page').innerHTML = `<h1>Welcome, ${username}!</h1>`;
}


function clearForm(form) {
    form.reset();
}
