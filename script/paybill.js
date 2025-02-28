const payBill = document.getElementById('payBil-btn');

payBill.addEventListener('click', function (event) {
    event.preventDefault();

    const payAmount = getInputValueById('payAmount');
    const pin = getInputValueById('pinBill');
    const convertBalance = getInnerTextValueById('mainBalance');

    const payValue = document.getElementById('payAmount');
    const pinValue = document.getElementById('pinBill');
    const mainBalance = document.getElementById('mainBalance');


    const accountNumber = document.getElementById('acc-number').value;
    const accNumLength = accountNumber.length;


    const totalBalance = convertBalance - payAmount;

    if (convertBalance < payAmount) {
        alert('Insufficient Balance');
        return;
    }


    if (payAmount > 0 && accNumLength === 11) {
        if (pin === 1234) {
            mainBalance.innerText = totalBalance;
            alert('Pay Bil Successfully');


            const transactionContainer = document.getElementById('transaction-container');
            const DateTime = getDateTime();


            //todo CarD Design 
            const div = document.createElement('div');
            div.classList.add('flex', 'items-center', 'justify-between', 'bg-white', 'px-4', 'py-3', 'rounded-xl', 'space-x-4', 'border-[rgba(8,8,8,0.1)]', 'border-2', 'mt-4');
            div.innerHTML = `
            <div class="flex items-center space-x-4">

            <!--? Image logo -->
            <div class="w-[60px] h-[60px] bg-[#F4F5F7] rounded-full">
            <img class="w-full p-3" src="Payoo-MFS-Resources/paybill.png" alt="">
            </div>

            <!--? text  -->
            <div class="text-[rgba(8,8,8,0.7)]">
            <h1 class=" text-[1.2rem] font-semibold">Pay Bill</h1>
            <p class="text-[1rem] font-normal">${DateTime}</p>
            </div>
            </div>

            <!--? 3 dot  -->
            <div class="flex items-center">
            <i class="fa-solid fa-ellipsis-vertical text-[#666768] text-[2rem]"></i>
            </div>
            `;
            transactionContainer.appendChild(div);



        } else {
            alert('Invalid Pin');
        }
    } else {
        alert('Enter Amount');
    }

    payValue.value = '';
    pinValue.value = '';

});