document.getElementById('showLoginFormBtn').addEventListener('click', function() {
    var loginContainer = document.getElementById('loginContainer');
    loginContainer.classList.toggle('hidden');
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Validate inputs (example)
    if (username === '' || password === '') {
      alert('Please enter both username and password.');
      return;
    }
    
    // You can send the username and password to the server for authentication here
    // This is where you'd use HTTPS and server-side encryption for secure transmission
    // For this example, we'll just log the username and password
    console.log('Username:', username);
    console.log('Password:', password);
  });
  