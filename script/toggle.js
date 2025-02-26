const cardOne = document.getElementById('card-one');
const cardTwo = document.getElementById('card-two');
const cardThree = document.getElementById('card-three');
const cardFour = document.getElementById('card-four');
const cardFive = document.getElementById('card-five');
const cardSix = document.getElementById('card-six');

const takaAdd = document.getElementById('takaAdd');
const takaOut = document.getElementById('takaOut');
const takaTrans = document.getElementById('takaTrans');
const takaBonus = document.getElementById('takaBonus');
const takaBill = document.getElementById('takaBill');
const transactionHistory = document.getElementById('transactionHistory');

cardOne.addEventListener('click', function (event) {
    event.preventDefault();

    takaAdd.style.display = 'block';
    takaOut.style.display = 'none';
    takaTrans.style.display = 'none';
    takaBonus.style.display = 'none';
    takaBill.style.display = 'none';
    transactionHistory.style.display = 'none';
});

cardTwo.addEventListener('click', function (event) {
    event.preventDefault();

    takaOut.style.display = 'block';
    takaAdd.style.display = 'none';
    takaTrans.style.display = 'none';
    takaBonus.style.display = 'none';
    takaBill.style.display = 'none';
    transactionHistory.style.display = 'none';
});

cardThree.addEventListener('click', function (event) {
    event.preventDefault();

    takaTrans.style.display = 'block';
    takaOut.style.display = 'none';
    takaAdd.style.display = 'none';
    takaBonus.style.display = 'none';
    takaBill.style.display = 'none';
    transactionHistory.style.display = 'none';
});

cardFour.addEventListener('click', function (event) {
    event.preventDefault();

    takaBonus.style.display = 'block';
    takaOut.style.display = 'none';
    takaTrans.style.display = 'none';
    takaAdd.style.display = 'none';
    takaBill.style.display = 'none';
    transactionHistory.style.display = 'none';
});

cardFive.addEventListener('click', function (event) {
    event.preventDefault();

    takaBill.style.display = 'block';
    takaOut.style.display = 'none';
    takaTrans.style.display = 'none';
    takaBonus.style.display = 'none';
    takaAdd.style.display = 'none';
    transactionHistory.style.display = 'none';
});


cardSix.addEventListener('click', function (event) {
    event.preventDefault();

    transactionHistory.style.display = 'block';
    takaAdd.style.display = 'none';
    takaOut.style.display = 'none';
    takaTrans.style.display = 'none';
    takaBonus.style.display = 'none';
    takaBill.style.display = 'none';
});