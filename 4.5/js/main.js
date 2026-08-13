const vendeorElements = (data = []) => {
  //   let root = document.getElementById("root");
  //   data.map((elem) => {
  //     let node = document.createElement("div");
  //     node.innerHTML =
  //       elem.id +
  //       "<br>" +
  //       elem.firstName +
  //       "<br>" +
  //       elem.lastName +
  //       "<br>" +
  //       elem.email;
  //     root.appendChild(node);
  //   });
  let tbody = document.querySelector(".table > tbody");
  data.map((elem) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("th");
    td1.innerHTML = elem.id;
    td1.setAttribute("scope", "row");
    let td2 = document.createElement("td");
    td2.innerHTML = elem.firstName;
    let td3 = document.createElement("td");
    td3.innerHTML = elem.lastName;
    let td4 = document.createElement("td");
    td4.innerHTML = elem.email;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
  });
};

fetch("data/users.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    vendeorElements(data);
  });
