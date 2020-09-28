function numbers(tall1, tall2) {
    //return tall1 + tall2;
    document.body.innerHTML += `
        <p>${tall1} + ${tall2} = ${tall1 + tall2}</p>
        <p>${tall1} - ${tall2} = ${tall1 - tall2}</p>
        <p>${tall1} * ${tall2} = ${tall1 * tall2}</p>
        <p>${tall1} / ${tall2} = ${tall1 / tall2}</p>
    `

}
 const RESULT = numbers (5, 2);

