const inputBar = document.getElementById("inputBar");
const listTest = document.getElementById("listTest");
const dropdown = document.getElementById("dropdown");
const dropdownUp = document.getElementById("dropdownUp");

const listQuestionBody = document.getElementById("listQuestionBody");
const testBody = document.getElementById("testBody");

const arrowQuestion = document.getElementById("arrowQuestion");

let a = 1;

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function toggleArrowQuestionFunction(){
    if(a == 1){
        listQuestionBody.classList.add("lolo");
        listQuestionBody.classList.add("displayNone");
        testBody.classList.remove("col-lg-9");
        testBody.classList.remove("pl-0");
        arrowQuestion.src = "../assets/arrowRightQuestion.png"
        a = 2
    }else{
        listQuestionBody.classList.remove("displayNone");
        testBody.classList.add("col-lg-9");
        testBody.classList.add("pl-0");
        arrowQuestion.src = "../assets/arrowLeftQuestion.png"
        a = 1
    }
}

function inputBarFunction (){
    if(a == 1){
        listTest.classList.remove("displayNone")
        dropdownUp.classList.remove("displayNone")
        dropdown.classList.add("displayNone")
        a = 2
    }
    else{
        listTest.classList.add("displayNone")
        dropdown.classList.remove("displayNone")
        dropdownUp.classList.add("displayNone")
        a = 1
    }
}

