const inputBar = document.getElementById("inputBar");
const listTest = document.getElementById("listTest");
const dropdown = document.getElementById("dropdown");
const dropdownUp = document.getElementById("dropdownUp");

const listQuestionBody = document.getElementById("listQuestionBody");
const testBody = document.getElementById("testBody");

const arrowQuestion = document.getElementById("arrowQuestion");

let a = 1;

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

