const cashOutMoney = document.getElementById('cashOutMoney');

cashOutMoney.addEventListener('click', function (event) {
    event.preventDefault();
    const minusAmount = document.getElementById('minusAmount').value;
    const amountValue = parseInt(minusAmount);


    const mainBalance = document.getElementById('mainBalance');
    const mainBalanceValue = parseInt(mainBalance.innerText);

    const pin = document.getElementById('pin').value;
    const pinValue = parseInt(pin);

    const totalBalance = mainBalanceValue - amountValue;

    if (amountValue > 0) {
        if (pinValue === 1234) {
            mainBalance.innerText = totalBalance;
            alert('Cash Out Successfully');
        } else {
            alert('Invalid Pin');
        }
    } else {
        alert('Enter Amount');
    }
});