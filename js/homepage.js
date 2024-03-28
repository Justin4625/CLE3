window.addEventListener('load', init);

let profileButton
let strengthButton

function init(){
    profileButton = document.getElementById('profile');
    profileButton.addEventListener('click', linkToProfile);
    strengthButton = document.getElementById('strengthButton');
    strengthButton.addEventListener('click', linkToKrachttraining);
}

function linkToProfile() {
    window.location.href = "profile.html"
}

function linkToKrachttraining() {
    window.location.href = "krachttraining.html"
}