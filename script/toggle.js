const cardOne = document.getElementById('card-one');
const cardTwo = document.getElementById('card-two');
const cardThree = document.getElementById('card-three');
const cardFour = document.getElementById('card-four');
const cardFive = document.getElementById('card-five');
const cardSix = document.getElementById('card-six');


cardOne.addEventListener('click', function (event) {
    event.preventDefault();

    const takaAdd = document.getElementById('takaAdd');
    takaAdd.style.display = 'block';
    takaOut.style.display = 'none';
    takaTrans.style.display = 'none';
    takaBonus.style.display = 'none';
    takaBill.style.display = 'none';
});

cardTwo.addEventListener('click', function (event) {
    event.preventDefault();
    
    const takaOut = document.getElementById('takaOut');
    takaOut.style.display = 'block';
    takaAdd.style.display = 'none';
    takaTrans.style.display = 'none';
    takaBonus.style.display = 'none';
    takaBill.style.display = 'none';
});

cardThree.addEventListener('click', function (event) {
    event.preventDefault();
    
    const takaTrans = document.getElementById('takaTrans');
    takaTrans.style.display = 'block';
    takaOut.style.display = 'none';
    takaAdd.style.display = 'none';
    takaBonus.style.display = 'none';
    takaBill.style.display = 'none';
});

cardFour.addEventListener('click', function (event) {
    event.preventDefault();
    
    const takaBonus = document.getElementById('takaBonus');
    takaBonus.style.display = 'block';
    takaOut.style.display = 'none';
    takaTrans.style.display = 'none';   
    takaAdd.style.display = 'none';
    takaBill.style.display = 'none';
});

cardFive.addEventListener('click', function (event) {
    event.preventDefault();
    
    const takaBill = document.getElementById('takaBill');
    takaBill.style.display = 'block';
    takaOut.style.display = 'none';
    takaTrans.style.display = 'none';
    takaBonus.style.display = 'none';
    takaAdd.style.display = 'none';
});