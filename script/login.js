const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function (event) {
    event.preventDefault();// prevent the form from submitting

    const number = document.getElementById('account-number').value;
    // console.log(number.length);

    const pin = document.getElementById('account-pin').value;
    // console.log(pin.length);

    if (number.length === 11) {
        if (pin.length === 4) {
            // console.log('Login successful');
            window.location.href = 'dashboard.html';
        }
        else {
            console.log('Invalid pin');
        }
    }
    else {
        console.log('Invalid account number');
    }
});