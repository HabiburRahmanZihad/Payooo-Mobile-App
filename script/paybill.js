const payBill = document.getElementById('payBil-btn');

payBill.addEventListener('click', function (event) {
    event.preventDefault();
    const payAmount = document.getElementById('payAmount').value;
    const amountValue = parseInt(payAmount);


    const mainBalance = document.getElementById('mainBalance');
    const mainBalanceValue = parseInt(mainBalance.innerText);

    const pin = document.getElementById('pin').value;
    const pinValue = parseInt(pin);

    const totalBalance = mainBalanceValue - amountValue;
    if (amountValue > 0) {
        if (pinValue === 1234) {
            mainBalance.innerText = totalBalance;
            alert('Pay Bil Successfully');
        } else {
            alert('Invalid Pin');
        }
    } else {
        alert('Enter Amount');
    }

    amount = '';

});