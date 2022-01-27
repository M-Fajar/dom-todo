let divContent = document.createElement("div");
divContent.setAttribute("id", "content");
document.body.append(divContent);

let divInput = document.createElement("div");
divInput.setAttribute("id", "div-input");
divContent.appendChild(divInput);

let header = document.createElement("h5");
header.innerHTML = "New Todo:";
divInput.append(header);

let inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.classList.add("form-control");
inputName.setAttribute("id", "input-name");
divInput.append(inputName);

let btnAdd = document.createElement("button");
btnAdd.setAttribute("id", "btn-add");
btnAdd.classList.add("btn");
btnAdd.textContent = "Add";
divInput.append(btnAdd);

let divList = document.createElement("div");
divList.setAttribute("id", "div-list");
divContent.append(divList);

btnAdd.addEventListener("click", () => {
  if (btnAdd.textContent == "Edit") return;
  let data = inputName.value;
  if (data == "") return;
  inputName.value = "";

  let listItem = document.createElement("div");
  listItem.setAttribute("class", "list-item");

  let textList = document.createElement("h5");
  textList.innerHTML = data;

  let iconRemove = document.createElement("i");
  iconRemove.className = "far fa-trash-alt remove icon";

  let iconEdit = document.createElement("i");
  iconEdit.className = "fas fa-pen edit icon";

  listItem.append(textList);
  listItem.appendChild(iconEdit);
  listItem.appendChild(iconRemove);
  divList.append(listItem);

  let btnRemove = document.getElementsByClassName("remove");
  let btnEdit = document.getElementsByClassName("edit");
  for (i = 0; i < btnRemove.length; i++) {
    btnRemove[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
      btnAdd.textContent = "Add";
    };
    btnEdit[i].onclick = function () {
      let div = this.parentElement;
      let text = div.childNodes;
      let dataEdit = text[0].innerHTML;

      inputName.value = dataEdit;
      btnAdd.textContent = "Edit";
      btnAdd.onclick = function () {
        if (btnAdd.textContent == "Add" || inputName.value == "") return;

        text[0].innerHTML = inputName.value;
        btnAdd.textContent = "Add";
        inputName.value = "";
      };
    };
  }
});
//
