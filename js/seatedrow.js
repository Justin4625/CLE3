window.addEventListener('load', init);

let profileButton;
let arrowBack;
let nextExercise;

function init(){
    profileButton = document.getElementById('profileButton');
    profileButton.addEventListener('click', linkToProfile);
    arrowBack = document.getElementById('arrowBack');
    arrowBack.addEventListener('click', linkToBicepCurlCable);
    nextExercise = document.getElementById('nextExercise');
    nextExercise.addEventListener('click', differentExercise);
}

function linkToProfile() {
    window.location.href = "profile.html"
}

function linkToBicepCurlCable() {
    window.location.href = "bicepcurlcable.html"
}

function differentExercise() {
    window.location.href = "bicepcurlmachine.html"
}