fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
    displayUsers(users);
  });

function displayUsers(users) {
  const div = document.querySelector("#users");

  let html = `<table classe="tale table-striped tablehover"><thead><tr>`;
  html += dislpayHeaders(users[0]);
  html += "</tr></thead>";

  users.forEach(user => {
    html += displayUser(user);
  });
  html += "</table>";

  div.innerHTML = html;
}

function displayUser(user) {
  let html = "<tr>";

  for (const prop in user) {
    if (user[prop] instanceof Object) {
      let ob = user[prop];
      html += "<td>";

      for (const prop in ob) {
        html += ob[prop] + " ";
      }
      html += "</td>";
    } else {
      html += `<td>${user[prop]}</td>`;
    }
  }
  html += "</tr>";
  return html;
}

function dislpayHeaders(user) {
  let html = "";
  for (const prop in user) {
    html += `<th>${prop}</th>`;
  }
  return html;
}
