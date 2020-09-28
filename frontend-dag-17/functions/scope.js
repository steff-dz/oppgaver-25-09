//Globale variabler kan brukers både inni og utenfor funksjoner
const HILSEN = "Hei";
let LaOssTaHelg = "Ja!";

function hei() {
    console.log(HILSEN);
    console.log(LaOssTaHelg);

    //Lokale konstanter og variabler kan kun brukes inni funksjonen de er definert inni

    const FARVEL = "Ha det!";
    //console.log(FARVEL);

    let HADET = "Farvel";
    //console.log(HADET);

    return HADET;
};

//You can get local vars and constants by making a global var that = the function holding the locals you want. You would ALSO need "return" in the function, however with the name of the variable/constant.

let VARIABLE = hei();
console.log(VARIABLE);











//Made a constant outside of the function, then made the function