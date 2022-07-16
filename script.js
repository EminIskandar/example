const form = document.querySelector("#form-input");
const table = document.querySelector(".table-body");

let productList = [];

function randomId() {
  return new Date().valueOf();
}

function submitForm(e) {
  e.preventDefault();
  var formData = new FormData(e.target);

  const newProduct = {};
  newProduct.id = randomId();

  for (var product of formData.entries()) {
    newProduct[product[0]] = product[1];
  }

  productList.push(newProduct);

  addProductToTable();
}

function addProductToTable() {
  table.innerHTML = "";

  for (let data of productList) {
    const tr = `
          <th scope="row">${data.id}</th>
              <td>${data.name}</td>
              <td>${data.count}</td>
              <td>${data.barcode}</td>
          <div class="dropdown">
              <a class="btn btn-slink dropdown-toggle btn-danger" style="color:black" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              ...
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item delete-btn" onclick="deleteTask(${data.id})" href="#" >Delete</a></li>
                  <li><a class="dropdown-item update-btn"  href="#" >Update</a></li>
              </ul>
          </div>
  `;

    table.insertAdjacentHTML("beforeend", tr);
    resetForm();
  }
}

function resetForm() {
  form.reset();
}

function deleteTask(id) {
  productList = productList.filter((product) => product.id !== id);
  resetForm();
  addProductToTable();
}

form.addEventListener("submit", submitForm);
