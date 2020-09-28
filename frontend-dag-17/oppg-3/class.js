const FIRKANT = document.querySelector("#firkant");

const INP_X = document.querySelector("#inpX");

const INP_Y = document.querySelector("#inpY");

function flyttFirkanten() {
    //FIRKANT.style.transform = `translate(${INP_X.value}px, ${INP_Y.value}px)`;
    FIRKANT.style.transform = `translateX(${INP_X.value}px)`;
    FIRKANT.style.transform = `translateY(${INP_Y.value}px)`;
};

INP_X.addEventListener("input", flyttFirkanten);

INP_Y.addEventListener("input", flyttFirkanten);

//Alternative solution:
// 1)Set position to absoolute in CSS
// 2)Use style.left to move box in X direction
// 3)Use style.top to move boxin Y direction. 