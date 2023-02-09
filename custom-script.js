const addFlightBlock = document.querySelector('.add-flight-block');
const hiddenBlock = document.querySelector('.flight-details');
const arrow = document.querySelector('.arrow');
const flightTitle = document.querySelector('.flight-title');

addFlightBlock.addEventListener('click', (e) => {
    e.preventDefault();
    hiddenBlock.classList.toggle('hidden');

    if (hiddenBlock.classList.contains('hidden')) {
        arrow.innerHTML = "▼";  
        flightTitle.style.textDecoration = 'underline 2px #30D5C8';

    }
    else {
        arrow.innerHTML = "▲";
        flightTitle.style.textDecoration = 'none';
    }
})