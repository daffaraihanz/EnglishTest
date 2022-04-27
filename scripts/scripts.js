const inputBar = document.getElementById("inputBar");
const listTest = document.getElementById("listTest");
const dropdown = document.getElementById("dropdown");
const dropdownUp = document.getElementById("dropdownUp");

let a = 1;

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