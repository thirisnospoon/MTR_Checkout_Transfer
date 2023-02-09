const addFlightBlock = document.querySelector('.add-flight-block');
const hiddenBlock = document.querySelector('.flight-details');
const arrow = document.querySelector('.arrow');

addFlightBlock.addEventListener('click', (e) => {
    e.preventDefault();
    hiddenBlock.classList.toggle('hidden');

    if (hiddenBlock.classList.contains('hidden')) {
        arrow.innerHTML = "▼";
    }
    else {
        arrow.innerHTML = "▲";
    }
})