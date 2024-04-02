window.addEventListener('load', init);

let arrowBack
let contactUs

function init(){
    arrowBack = document.getElementById('arrowBack');
    arrowBack.addEventListener('click', linkToHomepage);
    contactUs = document.getElementById('contact');
    contactUs.addEventListener('click', formSubmitted)
}

function linkToHomepage(e){
    window.location.href = "homepage.html"
}

function formSubmitted(e) {
    e.preventDefault()

    if(e.target.nodeName !== 'BUTTON'){
        return;
    }

    let succesMessage = document.createElement('p');
    succesMessage.innerText = 'Het is gelukt!';
    contactUs.appendChild(succesMessage);
}

