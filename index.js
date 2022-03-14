const dailyOpt = document.querySelector('#daily');
const weeklyOpt = document.querySelector('#weekly');
const monthlyOpt = document.querySelector('#monthly');

const dailyData = document.querySelector('.daily');
const weeklyData = document.querySelector('.weekly');
const monthlyData = document.querySelector('.monthly');

function removeActive(opt) {
    let currentOpt = document.querySelector('.active');
    currentOpt.classList.remove('active')
}

function addActive(opt) {
    opt.classList.add('active');
}


function hideDiv(opt) {
    let currentDiv = document.querySelectorAll('.active-info');
    currentDiv.forEach(e => e.classList.remove('active-info'))
}

function showDailyDiv(opt) {
    let optArray = document.querySelectorAll('.daily');
    optArray.forEach(e => e.classList.add('active-info'))
}

function showWeeklyDiv(opt) {
    let optArray = document.querySelectorAll('.weekly');
    optArray.forEach(e => e.classList.add('active-info'))
}

function showMonthlyDiv(opt) {
    let optArray = document.querySelectorAll('.monthly');
    optArray.forEach(e => e.classList.add('active-info'))
}

dailyOpt.addEventListener('click', () => {
    removeActive();
    addActive(dailyOpt);
    hideDiv();
    showDailyDiv();

})
weeklyOpt.addEventListener('click', () => {
    removeActive();
    addActive(weeklyOpt);
    hideDiv();
    showWeeklyDiv();
})
monthlyOpt.addEventListener('click', () => {
    removeActive();
    addActive(monthlyOpt);
    hideDiv();
    showMonthlyDiv();
})