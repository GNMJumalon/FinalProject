document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const supportReason = document.getElementById('supportReason').value.trim();
    const sex = document.querySelector('input[name="sex"]:checked');

    let valid = true;

    if (!firstName || !lastName || !email || !password || !supportReason || !sex) {
      alert("Please fill out all required fields.");
      valid = false;
    }

    if (valid) {
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('email', email);
      localStorage.setItem('sex', sex.value);
      localStorage.setItem('supportReason', supportReason);
      window.location.href = 'HTMLPage5_2.html';
    }
  });

 