const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function (event) {
    event.preventDefault();// prevent the form from submitting

    const number = document.getElementById('account-number').value;
    // console.log(number.length);

    const pin = document.getElementById('account-pin').value;
    const pinvalue = parseInt(pin);
    // console.log(pin.length);

    if (number.length === 11) {
        if (pinvalue === 1234) {
            window.location.href = 'dashboard.html';
        }
        else {
            alert('Invalid Pin');
        }
    }
    else {
        alert('Invalid account number');
    }
});