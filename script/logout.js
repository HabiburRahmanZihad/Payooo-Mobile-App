const logout = document.getElementById('logout-btn');
logout.addEventListener('click', function (event) {
    event.preventDefault();// prevent the form from submitting
    window.location.href = 'index.html';
});