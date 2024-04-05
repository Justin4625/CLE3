window.addEventListener('load', init);

let profileButton;
let arrowBack;
let end;

function init(){
    profileButton = document.getElementById('profileButton');
    profileButton.addEventListener('click', linkToProfile);
    arrowBack = document.getElementById('arrowBack');
    arrowBack.addEventListener('click', linkToBicepCurlMachine);
    end = document.getElementById('nextExercise');
    end.addEventListener('click', endOfWorkout);
}

function linkToProfile() {
    window.location.href = "profile.html"
}

function linkToBicepCurlMachine() {
    window.location.href = "bicepcurlmachine.html"
}

function endOfWorkout() {
    window.location.href = "krachttraining.html"
}