
const creatediv = (...className) => {
    let div = document.createElement('div');
    div.classList.add(...className);
    return div;
}

const createInputField = (data) => {
    let inputField = document.createElement('input');
    inputField.setAttribute("type", data.type);
    inputField.classList.add(data.className);
    inputField.classList.add("mb-2");
    inputField.setAttribute("placeholder", data.label);
    inputField.setAttribute("required", data.required !== false ? true : false);
    inputField.setAttribute("name", data.name);
    return inputField;
} 

const createNavbar = () => {
    let body = document.body;
    let navElement = document.createElement('nav');
    navElement.classList.add("navbar", "navbar-expand-lg", "bg-dark");
    body.append(navElement);
    let div = creatediv("container");
    navElement.append(div);
    let navbarBrand = document.createElement('a');
    navbarBrand.classList.add("navbar-brand", "text-white");
    navbarBrand.setAttribute('href', '#');
    navbarBrand.innerText = "Registration Form"
    div.append(navbarBrand);
}

const createFormBlock = () => {
    let containerDiv = creatediv("container");
    document.body.append(containerDiv);
    let rowDiv = creatediv("row");
    containerDiv.append(rowDiv);
    let column12 = creatediv("col-md-6", "offset-md-3");
    rowDiv.append(column12);
    let card = creatediv("card", "mt-3");
    column12.append(card);
    let cardBody = creatediv("card-body");
    card.append(cardBody);
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = "Registration Form";
    cardBody.append(cardTitle);
    let formEle = document.createElement('form');
    formEle.setAttribute('onsubmit', 'event.preventDefault(); submitForm(event);')
    cardBody.append(formEle);
    
    let inputFieldData = [
        {"label" : "Name", "type" : "text", "className" : "form-control", "id" : "name", "name" : "name", "required" : "true"},
        {"label" : "Email", "type" : "email", "className" : "form-control", "id" : "email", "name" : "email", "required" : "true"},
        {"label" : "Date of Birth", "type" : "date", "className" : "form-control", "id" : "dob", "name" : "dob", "required" : "true"},
        // {"label" : "Profile Image", "type" : "file", "className" : "form-control", "id" : "profileImage", "name" : "profileImage", "required" : "false"},
    ]

    inputFieldData.map((item) => {
       let div = creatediv("form-group");
       formEle.append(div);
       let formLabel = document.createElement('label');
       formLabel.classList.add('form-label');
       formLabel.innerHTML = item.label;
       formLabel.setAttribute("for", item.id);
       div.append(formLabel);
       let inputFieldAppend = createInputField(item);
       div.append(inputFieldAppend);
    });

    let genderSelectFieldData = [
        {"title" : "Select Gender", "value" : ""},
        {"title" : "Male", "value" : "male"},
        {"title" : "Female", "value" : "female"},
        {"title" : "Others", "value" : "others"},
    ]

    let selectGender = createSelectMenu(genderSelectFieldData);
    formEle.append(selectGender);
    
    let submitButton = createButtom('submitBtn', 'submit', 'submit', 'primary');
    formEle.append(submitButton);
}

const createSelectMenu = (fieldData = []) => {
    let selectFormCreate = document.createElement('select');
    selectFormCreate.setAttribute("id", "selectGender");
    selectFormCreate.setAttribute("name", "gender");
    selectFormCreate.classList.add('form-control');
    fieldData.map((item, index) => {
        let option = document.createElement('option');
        option.innerHTML = item.title;
        option.value = item.value;
        selectFormCreate.append(option);
    });
    let div = creatediv("form-group");
    let formLabel = document.createElement('label');
    formLabel.classList.add('form-label');
    formLabel.innerHTML = "Select Gender";
    formLabel.setAttribute("for", "selectGender");
    div.append(formLabel);
    div.append(selectFormCreate);
    return div;
}

const createButtom = (selector, btnType, btnText, btnColor) => {
    let btn = document.createElement('button');
    btn.classList.add('btn', 'btn-'+btnColor, selector, 'float-end', 'mt-2');
    btn.innerHTML = btnText;
    btn.setAttribute("type", btnType);
    return btn;
} 

const createTableBlock = (tableHead, tableData = []) => {
    let body = document.body;
    let con = creatediv('container', 'mt-3');
    let row = creatediv('row'); 
    let col = creatediv('col'); 
    let tableRes = creatediv('table-responsive');
    let table = createTable(tableHead, tableData);
    con.append(row); 
    row.append(col); 
    col.append(tableRes);
    tableRes.append(table);
    body.append(con) 
}

const createTable = (tableHead, tableData) => {
    const table = document.createElement('table');
    table.classList.add('table', 'table-bordered');
    table.setAttribute('id', 'datatable');
    const tHead = createThead(tableHead);
    table.append(tHead);
    const tableRow = createTableRow(tableData);
    table.append(tableRow);
    return table;
}

const createThead = (theadTitles) => {
    const thead = document.createElement('thead');
    const tr = createTr();
    thead.append(tr);
    theadTitles.map((item, index) => {
        const th = createTh(item);
        tr.append(th);
    });
    return thead;
}

const createTr = () => {
    const tr = document.createElement('tr');
    return tr;
}

const createTd = (data) => {
    let tr = createTr();
    const objKey = Object.keys(data);
    objKey.map((item, index) => {
        td = document.createElement('td');
        if (item == 'actionBtn') {
            td.append(data[item]);  
            td.classList.add('text-center');          
        } else {
            td.innerText = data[item];
        }
        tr.append(td);
    });
    return tr;
}

const createTh = (item, index) => {
    const th = document.createElement('th');
    th.innerText = item;
    th.classList.add('text-center');
    return th;
}

const createTableRow = (tableData) => {
    const tableBody = document.createElement('tbody');
    tableData.map((item, index) => {
        let tr = createTd(item); 
        tableBody.append(tr);
    });
    return tableBody;
}

const submitForm = (event) => {
    const data = new FormData(event.target);
    let editBtn = createButtom('editBtn', 'button', 'Edit', 'primary');
    let deleteBtn = createButtom('delBtn', 'button', 'Delete', 'danger');
    let groupBtn = creatediv('btn-group', 'text-center');
    groupBtn.append(editBtn);
    groupBtn.append(deleteBtn);
    let dataObject = {};
    for (const [key,value] of data) {
        dataObject[key] = value;
    }
    dataObject.actionBtn = groupBtn;

    let trWithData = createTd(dataObject);
    const table = document.querySelector('tbody');
    table.append(trWithData);
}

document.addEventListener('DOMContentLoaded', function() {
    createNavbar();
    createFormBlock();
    const tableHead = ["Name", "Email", "Date of Birth", "Gender"  , "Action"];
    createTableBlock(tableHead);
});


