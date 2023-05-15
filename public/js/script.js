const form = document.getElementById('form');
const questions = document.getElementById('number');
const missedEl = document.getElementById('missed');
const gradesEl = document.getElementById('grades');

// Might deelte if i figure out the new Elements
const chart = document.getElementById('chart');

let grades = [];

// Calculate the Grades
function calcGrades(questions){
    questions = +questions
    let points = 100/questions;

    for(var i=0; i<questions+1; i++){
        grades[i] = 100 - (points*i);
    };

    // console.log(grades)
}

// Update DOM
function updateDOM(){
    grades.forEach((grade, ind) => {

        const missed = document.createElement('p');
        missed.innerText = `${ind}`;
        missedEl.appendChild(missed);

        const gradesP = document.createElement('p');
        gradesP.innerText = grade.toFixed(2);
        gradesEl.appendChild(gradesP);
    })
}

// Event Listeners
form.addEventListener('submit', e => {
    e.preventDefault();
    grades = [];
    missedEl.innerHTML = '<h2>Missed</h2>';
    gradesEl.innerHTML = '<h2>Grade (%)</h2>';

    calcGrades(questions.value);
    updateDOM();

    questions.value = '';
    

})
