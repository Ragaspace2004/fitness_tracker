document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Placeholder for authentication logic
  console.log('Username:', username);
  console.log('Password:', password);
  winddow.alert("Login Successful");
    // Redirect to page2.html
    window.location.href = 'index.html';
  // Reset form after submission (optional)
  document.getElementById('form').reset();
});