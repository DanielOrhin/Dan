function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // You can perform further validation here

    // Example: check if username is 'admin' and password is 'password'
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password');
    }
}

function search() {
    var query = document.getElementById('searchInput').value;
    // Perform search operation, for example, update DOM to display search results
    document.getElementById('searchResults').innerHTML = "Search results for: " + query;
}
