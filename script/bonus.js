const bonusTaka = document.getElementById('bonus-btn');

bonusTaka.addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('coupon');
    const amountValue = parseInt(amount.value);


    const mainBalance = document.getElementById('mainBalance');
    const mainBalanceValue = parseInt(mainBalance.innerText);

    const pin = document.getElementById('pin').value;
    const pinValue = parseInt(pin);

    const gift = 999;
    const totalBalance = mainBalanceValue + gift;

    if (amountValue == 'abcd') {
        if (pinValue === 1234) {
            mainBalance.innerText = totalBalance;
            alert('Bonus Added Successfully');



            const transactionContainer = document.getElementById('transaction-container');
            const today = new Date();
            const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

            // const today = new Date();
            let hours = today.getHours();
            let minutes = today.getMinutes();
            let seconds = today.getSeconds();
            let ampm = hours >= 12 ? 'PM' : 'AM';

            // Convert 24-hour format to 12-hour format
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes; // Pad single digit minutes
            seconds = seconds < 10 ? '0' + seconds : seconds; // Pad single digit seconds

            const time = hours + ":" + minutes + ":" + seconds + " " + ampm;


            //todo CarD Design 
            const div = document.createElement('div');
            div.classList.add('flex', 'items-center', 'justify-between', 'bg-white', 'px-4', 'py-3', 'rounded-xl', 'space-x-4', 'border-[rgba(8,8,8,0.1)]', 'border-2', 'mt-4');
            div.innerHTML = `
            <div class="flex items-center space-x-4">

            <!--? Image logo -->
            <div class="w-[60px] h-[60px] bg-[#F4F5F7] rounded-full">
            <img class="w-full p-3" src="Payoo-MFS-Resources/Bonus.png" alt="">
            </div>

            <!--? text  -->
            <div class="text-[rgba(8,8,8,0.7)]">
            <h1 class=" text-[1.2rem] font-semibold">Bonus Get</h1>
            <p class="text-[1rem] font-normal">${date} ${time}</p>
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
        alert('Enter Valid Coupon');
    }

    amount.value= "";
});