const startDateEl = document.querySelector('input[name="startDate"]') //selecting startDate attribute
const endDateEl = document.querySelector('input[name="endDate"]');

formatMinStartDate()

startDateEl.addEventListener('change', formatMinEndDate);


function formatMinStartDate() {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    startDateEl.setAttribute('min', `${year}-${month}-${day}`);
}


    
function formatMinEndDate() {
    const selectedStartDate = new Date(startDateEl.value); //startDateEl.value retrieves the value (date) represents the min date for the end date
    const year = selectedStartDate.getFullYear();
    let month = selectedStartDate.getMonth() + 1;
    let day = selectedStartDate.getDate() + 1;
    
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    
    endDateEl.setAttribute('min', `${year}-${month}-${day}`);
}

//TODO select the start date input then you need to add an event listener to it everytime it changes. not a click a event. when that input changes you need to set the start date to be the min date of the end date.
//TODO ... input end date. whatever i pick as the start date, the end date should not allow me to choose a date before the start date. 