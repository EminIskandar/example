// Input
let inputName = document.querySelector(".input-name");
let inputCount = document.querySelector(".input-count");
let inputPrice = document.querySelector(".input-price");
let inputCode = document.querySelector(".input-code");
let trr = document.getElementsByTagName("tr");
// Button
let btn = document.querySelector("#btn-submit");
let delBtn = document.querySelector(".delete-btn");
let upBtn = document.querySelector(".update-btn");

// Table
let table = document.querySelector(".table");
let ttbody = document.querySelector(".table-body");
let tr;

let bodyTable = [];


eventListeners();
AddData();

function eventListeners() {
    btn.addEventListener("click", pushData);

    btn.addEventListener("keypress", function (event) {

        if (event.key == "Enter") {
            document.querySelector("#btn-submit").click();
        }

        event.preventDefault();
    })
}




function AddData(event) {


    for (let data of bodyTable) {

        tr = `
        <th scope="row">${data.id}</th>
    <td>${inputName.value}</td>
    <td>${inputCount.value}</td>
    <td>${inputCode.value}</td>
    <div class="dropdown">
  <a class="btn btn-slink dropdown-toggle btn-danger" style="color:black" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  ...
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item delete-btn" onclick="deleteTask(${data.id})" href="#" >Delete</a></li>
    <li><a class="dropdown-item update-btn"  href="#" >Update</a></li>
  </ul>
</div>`

        ttbody.insertAdjacentHTML("beforeend", tr);



        data.id++;
        event.preventDefault();
    }


    event.preventDefault();
}

function pushData(event) {


    bodyTable.push({
        "id": bodyTable.length + 1,
        "name": inputName.value,
        "code": inputCode.value,
        "count": inputCount.value,
        "price": inputPrice.value
    })



    AddData();
    event.preventDefault();
}


function deleteTask(item) {
    let deleteId;

    for (let i in bodyTable) {

        if (bodyTable[i].id == item) {

            deleteId = i;
        }

    }

    bodyTable.splice(deleteId, 1);



}