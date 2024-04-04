window.addEventListener('load', init);

let selectOption
let selectOptions
let submitButton
let checkbox = []
let checkboxClick
let answerQuestion = []
const answerKey = 'answer'

function init(){
    getanswerQuestionFromLocalStorage();
    selectOption = document.getElementById('selectOption');
    selectOptions = document.getElementById('selectOptions');
    selectOption.addEventListener('click', toggleDropdown2);
    selectOptions.addEventListener('click', toggleDropdown);
    submitButton = document.getElementById('buttonToHome');
    submitButton.addEventListener('click', linkToHomepage);
    checkboxClick = document.getElementById("dropdownContent2")
    checkboxClick.addEventListener('click', clickHandler);
}

function toggleDropdown() {
    let dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
}

function toggleDropdown2() {

    let dropdownContent2 = document.getElementById("dropdownContent2");
    if (dropdownContent2.style.display === "none") {
        dropdownContent2.style.display = "block";
    } else {
        dropdownContent2.style.display = "none";
    }
}

function clickHandler(e) {
    const clickedElement = e.target
    const checkboxId = clickedElement.dataset.id
    console.log(e.target.nodeName)
    if (clickedElement !== 'INPUT'){
        return
    }

    const chosenCheckbox = answerQuestion.indexOf(checkboxId)
    const checkboxAnswer = document.querySelector(`.dropdownContent[data.id="${pal[palId].name}"]`);

    if (chosenCheckbox !== -1) {
            answerQuestion.splice(chosenCheckbox, 1)
            checkboxAnswer.classList.remove('favorite')
     } else {
            answerQuestion.push(chosenCheckbox)
            checkboxId.classList.add('favorite')
        }
        localStorage.setItem(answerKey, JSON.stringify(answerQuestion))
    }


    if (answerQuestion.includes(checkbox.id.toString())) {
        checkbox.classList.add('favorite');
    }


function getanswerQuestionFromLocalStorage(){

}

function linkToHomepage(e){
    window.location.href = "homepage.html"


}
