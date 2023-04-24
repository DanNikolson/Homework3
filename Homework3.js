const UserName = document.getElementById("name");
const UserSurname = document.getElementById("surname");
const UserAge = document.getElementById("age");
const Submit = document.getElementById("submit");
const UserForm = document.querySelector("form");
const Delete = document.getElementById("delete");
const UserTable = document.getElementById("UserTable");
Submit.addEventListener("click", (e) => {
  e.preventDefault();
  const name = UserName.value.trim();
  const surname = UserSurname.value.trim();
  const age = UserAge.value.trim();

  if (name && surname && age) {
    let TableRow = document.createElement("tr");
    let TableId = document.createElement("td");
    let TableName = document.createElement("td");
    let TableSurname = document.createElement("td");
    let TableAge = document.createElement("td");

    TableId.textContent = UserTable.childElementCount + 1;
    TableName.textContent = name;
    TableSurname.textContent = surname;
    TableAge.textContent = age;

    TableRow.appendChild(TableId);
    TableRow.appendChild(TableName);
    TableRow.appendChild(TableSurname);
    TableRow.appendChild(TableAge);
    UserTable.appendChild(TableRow);
    UserForm.reset();
  } else {
    alert("Ошибка, заполните все поля");
  }
});

Delete.addEventListener("click", () => {
  const rows = UserTable.rows;
  for (let i = rows.length - 1; i >= 0; i--) {
    rows[i].remove();
  }
});