document.addEventListener('DOMContentLoaded', function () {
    const forgotPasswordBtn = document.getElementById('forgot-password-btn');
    const signUpBtn = document.getElementById('sign-up-btn');
    const loginForm = document.getElementById('login-form');
    const signUpForm = document.getElementById('signup-form');
    const queryBtn = document.getElementById('q-btn');

    if (forgotPasswordBtn) {
        forgotPasswordBtn.addEventListener('click', function() {
            // Redirect to the forgot password page or trigger the forgot password process
            alert('Forgot Password functionality triggered!');
            // window.location.href = "";
        });
    }

    if (signUpBtn) {
        signUpBtn.addEventListener('click', function() {
            // Redirect to the forgot password page or trigger the forgot password process
            // alert('Sign Up functionality triggered!');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            alert(`Username: ${username}\nPassword: ${password}`);
        });
    }

    if (signUpForm) {
        signUpForm.addEventListener('submit', async function (event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const avatar = document.getElementById('avatar').value;
    
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            // Perform a POST request to the server to submit user signup data
            fetch('/html/signup.html', {
                method: 'POST', // Using the HTTP POST method
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                // Use FormData to collect form data and URLSearchParams to encode it
                body: new URLSearchParams(new FormData(signUpForm)),
            })
            .then(response => {
                // Check if the network response is successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .catch(error => {
                // Handle errors during the fetch operation
                console.error('There was a problem with the fetch operation:', error);
            });

            // Display a summary of the entered data to the user
            alert(`Email: ${email}\nUsername: ${username}\nPassword: ${password}\nAvatar: ${avatar}`);
        });
    }

    if (queryBtn){
        queryBtn.addEventListener('submit', async function (event) {
            event.preventDefault();
            const email = document.getElementById('email').value; // create button to form

            // Perform a POST request to the server to submit user signup data
            fetch('/html/signup.html', {
                method: 'POST', // Using the HTTP POST method
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                // Use FormData to collect form data and URLSearchParams to encode it
                body: new URLSearchParams(new FormData(signUpForm)),
            })
            .then(response => {
                // Check if the network response is successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .catch(error => {
                // Handle errors during the fetch operation
                console.error('There was a problem with the fetch operation:', error);
            });

            // Display a summary of the entered data to the user
            alert(`Email: ${email}\nUsername: ${username}\nPassword: ${password}\nAvatar: ${avatar}`);
        });
    }
});