window.addEventListener('load', init);

let profileButton;
let arrowBack;
let filterButton;

function init() {
    profileButton = document.getElementById('profileButton');
    profileButton.addEventListener('click', linkToProfile);
    arrowBack = document.getElementById('arrowBack');
    arrowBack.addEventListener('click', linkToKrachttraining);
    filterButton = document.getElementById('filterButton');
    filterButton.addEventListener('click', linkToKrachttraining);
}

function linkToProfile() {
    window.location.href = "profile.html"
}

function linkToKrachttraining() {
    window.location.href = "krachttraining.html"
}