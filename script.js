// Input
let inputName = document.querySelector(".input-name");
let inputCount = document.querySelector(".input-count");
let inputPrice = document.querySelector(".input-price");
let inputCode = document.querySelector(".input-code");
// Button
let btn = document.querySelector("#btn-submit");
// Table
let table = document.querySelector(".table");
let tbody = document.querySelector(".table-body");
let tr;


console.log(eventListeners());

function eventListeners() {
    btn.addEventListener("click", pushData);
}


function pushData(event) {
    event.preventDefault();
    for (let id = 1; id < tbody.length; id++) {

        
    tr = `<th scope="row">${id}</th>
    <td>${inputName.value}</td>
    <td>${inputCount.value}</td>
    <td>${inputCode.value}</td>`

    tbody.insertAdjacentHTML("beforeend",tr);
    }

 
}
