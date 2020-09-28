const BOX = document.querySelector("#box");

const INP = document.querySelector("#inp-size");

const INP_BorderRadius = document.querySelector("#inp-border-rad");

const RED = document.querySelector("#rangeRed");

const BLUE = document.querySelector("#rangeBlue");

const GREEN = document.querySelector("#rangeGreen");

const SHADOW_X = document.querySelector("#shadowXSlider");

const SHADOW_Y = document.querySelector("#shadowYSlider");

//console.log(SHADOW_X, SHADOW_Y);


INP.oninput = function () {
    BOX.style.width = INP.value + ("px");
    BOX.style.height = INP.value + ("px");
}

INP_BorderRadius.oninput = function () {
    BOX.style.borderRadius = INP_BorderRadius.value + ("px");
}

RED.oninput = function () {
    let COLOR = 'rgb(' + RED.value + ", " + BLUE.value + "," + GREEN.value +')';
    BOX.style.backgroundColor = COLOR;
}

BLUE.oninput = function () {
    let COLOR = 'rgb(' + RED.value + ", " + BLUE.value + "," + GREEN.value +')';
    BOX.style.backgroundColor = COLOR;
}

GREEN.oninput = function () {
    let COLOR = 'rgb(' + RED.value + ", " + BLUE.value + "," + GREEN.value +')';
    BOX.style.backgroundColor = COLOR;
}

SHADOW_X.oninput = function () {
    BOX.style.boxShadow = Number(SHADOW_X.value + " " + SHADOW_Y.value + 0);
    
    //SHADOW_X.value + ("px") + SHADOW_Y.value + ("px");
    //BOX.style.boxShadow = SHADOW_Y.value + ("px") + SHADOW_Y.value + ("px");
}

// SHADOW_X.oninput = function () {
//     BOX.style.boxShadow =  SHADOW_X.value + ("px") + "" + SHADOW_Y.value + ("px");
// }


//WHY DID THE BELOW NOT WORK?? and could I do Green.oninput, BLUE.oninput, RED.oninput = something?

// function changeColor () {
//     let RED = document.getElementById("rangeRed").value;
//     let BLUE = document.getElementById("rangeBlue").value;
//     let GREEN = document.getElementById("rangeGreen").value;
//     let COLOR = 'rgb("+ RED + "," + GREEN + "," + BLUE +")'
//     BOX.style.backgroundColor = COLOR;
// }

// document.getElementById("rangeRed").addEventListener("oninput", changeColor);
// document.getElementById("rangeBlue").addEventListener("input", changeColor);
// document.getElementById("rangeGreen").addEventListener("input", changeColor);


// function changeColor() {
//     let RED = document.getElementById('rangeRed').value;
//     let BLUE = document.getElementById('rangeBlue').value;
//     let GREEN = document.getElementById('rangeGREEN').value;
//     let COLOR = 'rgb(' + RED + ',' + GREEN + ',' + BLUE +')';
//     BOX.style.backgroubdColor = COLOR;
// }

// document.getElementById('rangeRed').addEventListener('input',changeColor);
// document.getElementById('rangeBlue').addEventListener('input',changeColor);
// document.getElementById('rangeGreen').addEventListener('input',changeColor);












//console.log(INP_BorderRadius);

//Not entirely sure what the above is. Variable with an event equating to a function and then saying what that will function will do?