const form = document.getElementById('form');
const questions = document.getElementById('number');
const table = document.querySelector("table")


// Calculate the Grades
function calcGrades(questions){

    let grades = {};
    
    questions =+ questions
    let points = 100/questions;

    for(var i=0; i<questions+1; i++){
        grades[i] = 100 - (points*i);
    };

    return grades

    // console.log(grades)
}

// Update DOM
function updateDOM(percentagesArr){

    table.innerHTML = ""

    for(let number in percentagesArr){
        table.innerHTML += document.createElement("tr").innerHTML = `<th>${number}</th><th>${Math.ceil(percentagesArr[number])}</th>`
    }
}

// Event Listeners
form.addEventListener('submit', e => {
    e.preventDefault();

    updateDOM(calcGrades(questions.value));

    questions.value = '';
    

})
