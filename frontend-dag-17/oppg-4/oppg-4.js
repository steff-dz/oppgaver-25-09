const DIV_ONE = document.querySelector("#box-one");
const DIV_TWO = document.querySelector("#box-two")

DIV_ONE.style.width = "100px";
DIV_ONE.style.height = "100px";
DIV_ONE.style.padding = "10px";
DIV_ONE.style.backgroundColor = "red";
DIV_ONE.innerHTML = "I'm box one";

DIV_TWO.style.width = "200px";
DIV_TWO.style.height = "100px";
DIV_TWO.style.padding = "10px";
DIV_TWO.style.backgroundColor = "yellow";
DIV_TWO.innerHTML = "And I'm box two";
DIV_TWO.style.margin = "10px";

const INP_COLOR = document.querySelector("#inp-color");
const INP_WIDTH = document.querySelector("#inp-width");
const INP_HEIGHT = document.querySelector("#inp-height");

const INP2_COLOR = document.querySelector("#inp-color2");
const INP2_WIDTH = document.querySelector("#inp-width2");
const INP2_HEIGHT = document.querySelector("#inp-height2");

function changeBox () {
    DIV_ONE.style.backgroundColor = INP_COLOR.value;

    const DivOneWidth = Number(INP_WIDTH.value) + "px";
    DIV_ONE.style.width = DivOneWidth;

    const DivOneHeight = Number(INP_HEIGHT.value) + "px";
    DIV_ONE.style.height = DivOneHeight;

    //code for Box 2 below
    DIV_TWO.style.backgroundColor = INP2_COLOR.value;

    const DivTwoWidth = Number(INP2_WIDTH.value) + "px";
    DIV_TWO.style.width = DivTwoWidth;
    const DivTwoHeight = Number (INP2_HEIGHT.value) + "px";
    DIV_TWO.style.height = DivTwoHeight;
};

INP_COLOR.addEventListener("input", changeBox);
INP_WIDTH.addEventListener("input", changeBox);
INP_HEIGHT.addEventListener("input", changeBox);
INP2_COLOR.addEventListener("input", changeBox);
INP2_WIDTH.addEventListener("input", changeBox);
INP2_HEIGHT.addEventListener("input", changeBox);

//TASK C:

function emptyBox () {
    DIV_ONE.style.backgroundColor = null;
    DIV_ONE.innerText = null;
    DIV_ONE.style.width = null;
    DIV_ONE.style.height = null;
    DIV_TWO.style = null;
    DIV_TWO.innerText = null;
};

DIV_ONE.addEventListener("click", emptyBox);
DIV_TWO.addEventListener("click", emptyBox);

//TASK D: 
DIV_ONE.addEventListener("mouseover", changeBox);
DIV_TWO.addEventListener("mouseover", changeBox);


//Putting back the statements in changeBox function into hoverReturn will bring the box back. But how do I this without repeating all of that code?

//I could achieve this with less text by not creating a new function, but instead making a new EventListener that uses the original function. 

//The problem with this is that if I started from fresh, the boxes will go to 0 if I mouse over the elements. 







