
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
    let column12 = creatediv("col-md-6", "offset-md-4");
    rowDiv.append(column12);
    let card = creatediv("card", "mt-3");
    column12.append(card);
    let cardBody = creatediv("card-body");
    card.append(cardBody);
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = "Registration Form";
    cardBody.append(cardTitle);
    let formele = document.createElement('form');
    cardBody.append(formele);
    
    let inputFieldData = [
        {"label" : "Name", "type" : "text", "className" : "form-control", "id" : "uName", "name" : "uName", "required" : "true"},
        {"label" : "Email", "type" : "email", "className" : "form-control", "id" : "uEmail", "name" : "uEmail", "required" : "true"},
        {"label" : "Date of Birth", "type" : "date", "className" : "form-control", "id" : "uDob", "name" : "uDob", "required" : "true"},
    ]

    inputFieldData.map((item) => {
       let div = creatediv("form-group");
       formele.append(div);
       let formLabel = document.createElement('label');
       formLabel.classList.add('form-label');
       formLabel.innerHTML = item.label;
       formLabel.setAttribute("for", item.id);
       div.append(formLabel);
       let inputFieldAppend = createInputField(item);
       div.append(inputFieldAppend);
    })



    // let formEle = document.createElement('form');
    // column12.append(formEle);
    // let fieldset = document.createElement("fieldset");
    // fieldset.classList.add("p-3");
    // formEle.append(fieldset);
    // let legend = document.createElement('legend');
    // legend.innerHTML = 'Registration Form';
    // fieldset.append(legend);
}

document.addEventListener('DOMContentLoaded', function() {
    createNavbar();
    createFormBlock();
});
