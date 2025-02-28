const addMoney = document.getElementById('addMoney');

addMoney.addEventListener('click', function (event) {
    event.preventDefault();

    const amount = getInputValueById("amount");
    const pin = getInputValueById("pin");
    const convertBalance = getInnerTextValueById('mainBalance');

    const amountValue = document.getElementById("amount");
    const pinValue = document.getElementById("pin");
    const mainBalance = document.getElementById('mainBalance');

    const accountNumber = document.getElementById('account-number').value;
    const accNumLength = accountNumber.length;

    const totalBalance = convertBalance + amount;


    if (amount > 0 && accNumLength === 11) {
        if (pin === 1234) {
            mainBalance.innerText = totalBalance;
            alert('Money Added Successfully');


            const DateTime = getDateTime();
            const transactionContainer = document.getElementById('transaction-container');
            //todo CarD Design 
            const div = document.createElement('div');
            div.classList.add('flex', 'items-center', 'justify-between', 'bg-white', 'px-4', 'py-3', 'rounded-xl', 'space-x-4', 'border-[rgba(8,8,8,0.1)]', 'border-2', 'mt-4');
            div.innerHTML = `
            <div class="flex items-center space-x-4">

            <!--? Image logo -->
            <div class="w-[60px] h-[60px] bg-[#F4F5F7] rounded-full">
            <img class="w-full p-3" src="Payoo-MFS-Resources/Add.png" alt="">
            </div>

            <!--? text  -->
            <div class="text-[rgba(8,8,8,0.7)]">
            <h1 class=" text-[1.2rem] font-semibold">Add Money</h1>
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

    amountValue.value = '';
    pinValue.value = '';
});