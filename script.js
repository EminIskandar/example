// Input
let inputName = document.querySelector(".input-name");
let inputCount = document.querySelector(".input-count");
let inputPrice = document.querySelector(".input-price");
let inputCode = document.querySelector(".input-code");
let trr = document.getElementsByTagName("tr");
// Button
let btn = document.querySelector("#btn-submit");
// Table
let table = document.querySelector(".table");
let ttbody = document.querySelector(".table-body");
let tr;

let bodyTable = [];


eventListeners();

function eventListeners() {
    btn.addEventListener("click", pushData);
    btn.addEventListener("keypress",btnAdd )
}

AddData();
function btnAdd (event) {
    if (event.key == "Enter") {
        btn.click();

    }
}

function AddData(event) {


    for (let data of bodyTable) {

        tr = `<th scope="row">${data.ids}</th>
    <td>${inputName.value}</td>
    <td>${inputCount.value}</td>
    <td>${inputCode.value}</td>`

        ttbody.insertAdjacentHTML("beforeend", tr);



        data.ids++;
        event.preventDefault();
    }


    event.preventDefault();
}

function pushData(event) {


    bodyTable.push({
        "ids": bodyTable.length + 1,
        "name": inputName.value,
        "code": inputCode.value,
        "count": inputCount.value,
        "price": inputPrice.value
    })



    AddData();
    event.preventDefault();
}