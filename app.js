const form = document.querySelector(".form");
const wrong = document.querySelector(".wrong");
const output = document.querySelector(".output")

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const input = document.querySelector('.input');
    const number = document.querySelector(".input").value;
    const kg = number/2.2;

    console.log(kg);

    if (kg <= 0) {
        wrong.innerHTML = "please add a valid number!"
        setTimeout(() => {
            wrong.innerHTML = ""
        },2000);
        
    }
    else{
        output.innerHTML = `<h1>${kg.toFixed(2)}</h1>`
        setTimeout(() => {
            output.innerHTML = ""
        },2000);
    }

});

    