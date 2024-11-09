// Handle signup
document.getElementById('signup-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    });
    const result = await response.json();
    alert(result.message);
    if (response.ok) window.location.href = 'login.html';
});

// Handle login
document.getElementById('login-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const result = await response.json();
    alert(result.message);
    if (response.ok) window.location.href = 'index.html';
});

// Handle logout
document.getElementById('logout')?.addEventListener('click', async () => {
    await fetch('/auth/logout');
    alert('Logged out');
    window.location.href = 'login.html';
});
