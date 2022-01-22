function addItem(e) {
    let item = document.getElementById('item');
    if (item.value.length <= 0) {
        return;
    }
    // console.log(e);
    if (tableBody.children.length <= 0) {
        let shopTable = document.getElementById('shopTable');
        shopTable.nextElementSibling.remove();
    }
    // let item = document.getElementById('item');
    let description = document.getElementById('desc');
    let quantity = document.getElementById('quan');
    let newRow = document.createElement('tr');
    newRow.innerHTML = `<th scope="row">${item.value}</th>
                        <td>${description.value}</td>
                        <td>${quantity.value}</td>
                        <td>
                            <button id="removeBtn" onclick="removeItem(this)" type="button"
                                class="btn btn-danger">Remove</button>
                            <button id="editBtn" onclick="editItem(this)" type="button"
                            class="btn btn-warning m-2">Edit</button>
                        </td>`;
    item.value = "";
    description.value = "";
    quantity.value = "";

    tableBody.append(newRow);
}

function removeItem(e) {
    let toRemove = e.parentElement.parentElement;
    toRemove.remove();
    let parentList = document.getElementById('tableBody');
    if (parentList.children.length <= 0) {
        let emptyMsg = document.createElement('h4');
        emptyMsg.className = "text-center";
        emptyMsg.textContent = "Nothing is here, Please add some items";
        let shopTable = document.getElementById('shopTable');
        shopTable.after(emptyMsg);
    }
}

function editItem(e) {
    if (e.textContent == "Edit") {
        //Item
        let currItem = e.parentElement.parentElement.children[0];
        let newItem = document.createElement('input');
        newItem.type = "text";
        newItem.className = "form-control";
        newItem.value = currItem.textContent;
        currItem.textContent = "";
        currItem.appendChild(newItem);

        //Description
        let currDes = e.parentElement.parentElement.children[1];
        let newDes = document.createElement('input');
        newDes.type = "text";
        newDes.className = "form-control";
        newDes.value = currDes.textContent;
        currDes.textContent = "";
        currDes.appendChild(newDes);

        //Quantity
        let currQuan = e.parentElement.parentElement.children[2];
        let newQuan = document.createElement('input');
        newQuan.type = "number";
        newQuan.className = "form-control";
        newQuan.value = currQuan.textContent;
        currQuan.textContent = "";
        currQuan.appendChild(newQuan);

        e.textContent = "Done";
    } else {
        let parentItem = e.parentElement.parentElement;
        let newItem = parentItem.children[0];
        let newDes = parentItem.children[1];
        let newQuan = parentItem.children[2];
        parentItem.innerHTML = `
        <th scope="row">${newItem.children[0].value}</th>
                        <td>${newDes.children[0].value}</td>
                        <td>${newQuan.children[0].value}</td>
                        <td>
                            <button id="editBtn" onclick="editItem(this)" type="button"
                                class="btn btn-warning m-2">Edit</button>
                            <button id="removeBtn" onclick="removeItem(this)" type="button"
                                class="btn btn-danger">Remove</button>
                        </td>
        `;
    }
}