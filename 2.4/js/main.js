const users = [
  { name: "Yazan", Age: 25, gender: "M" },
  { name: "Bader", Age: 25, gender: "M" },
  { name: "Raghad", Age: 27, gender: "F" },
  { name: "Nagham", Age: 22, gender: "F" },
];

const root = document.getElementById("main");
root.style.display = "flex";

for (let i = 0; i < users.length; i++) {
  let user = document.createElement("div");
  user.innerHTML = users[i].name;
  if (users[i].gender == "M") {
    user.style.backgroundColor = "cyan";
    user.style.border = " 2px solid black";
  } else {
    user.style.backgroundColor = "pink";
    user.style.border = "2px dotted brown";
  }
  user.style.padding = users[i].Age * 2 + "px";
  root.appendChild(user);
}
