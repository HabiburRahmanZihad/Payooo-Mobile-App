const bonusTaka = document.getElementById('bonus-btn');

bonusTaka.addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('coupon').value;
    // const amountValue = parseInt(amount);


    const mainBalance = document.getElementById('mainBalance');
    const mainBalanceValue = parseInt(mainBalance.innerText);

    const pin = document.getElementById('pin').value;
    const pinValue = parseInt(pin);

    const gift = 999;
    const totalBalance = mainBalanceValue + gift;

    if (amount == 'abcd') {
        if (pinValue === 1234) {
            mainBalance.innerText = totalBalance;
            alert('Bonus Added Successfully');
        } else {
            alert('Invalid Pin');
        }
    } else {
        alert('Enter Valid Coupon');
    }
});