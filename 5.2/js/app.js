const tasks = [
  { id: 1, title: "Create the taskflow page.", completed: true },
  { id: 2, title: "Finish the JavaScript file", completed: false },
  { id: 3, title: "Make the elements responsive", completed: true },
  { id: 4, title: "Finished the second homework.", completed: false },
  { id: 5, title: "Give the page some styling.", completed: true },
  { id: 6, title: "Finished the first homework.", completed: true },
];

// counter variables
const totalCount = document.querySelector("#totalCount");
const completedCount = document.querySelector("#completedCount");
const pendingCount = document.querySelector("#pendingCount");
const completedRate = document.querySelector("#completedRate");

// filter variables
const allTasks = document.querySelector("#allTasks");
const completedTasks = document.querySelector("#completedTasks");
const pendingTasks = document.querySelector("#pendingTasks");

// list variable
const myList = document.querySelector("#taskList");
const updateStates = () => {
  let comp = 0;
  let pend = 0;
  for (const task of tasks) {
    if (task.completed) comp++;
    else pend++;
  }
  totalCount.textContent = tasks.length;
  completedCount.textContent = comp;
  pendingCount.textContent = pend;
  completedRate.textContent = Math.floor((100 * comp) / tasks.length) + " %";
};
updateStates();

const renderAllTasks = () => {
  let html = "";
  for (const task of tasks) {
    let statusClass = "pending";
    let statusText = "Pending";
    if (task.completed) {
      statusClass = "completed";
      statusText = "Completed";
    }
    html += `
     <li class="task-item"> <span class="task-title">${task.title}</span><span class="task-status ${statusClass}">${statusText}</span></li>
     `;
  }
  myList.innerHTML = html;
};

allTasks.addEventListener("click", () => {
  renderAllTasks();
  allTasks.classList.add("active");
  completedTasks.classList.remove("active");
  pendingTasks.classList.remove("active");
});
renderAllTasks();

const renderCompletedTasks = () => {
  let html = "";
  for (const task of tasks) {
    let statusClass = "completed";
    let statusText = "Completed";
    if (task.completed) {
      html += `
     <li class="task-item"> <span class="task-title">${task.title}</span><span class="task-status ${statusClass}">${statusText}</span></li>
     `;
    }
  }
  myList.innerHTML = html;
};

completedTasks.addEventListener("click", () => {
  renderCompletedTasks();
  completedTasks.classList.add("active");
  allTasks.classList.remove("active");
  pendingTasks.classList.remove("active");
});

const renderPendingTasks = () => {
  let html = "";
  for (const task of tasks) {
    let statusClass = "pending";
    let statusText = "Pending";
    if (!task.completed) {
      html += `
     <li class="task-item"> <span class="task-title">${task.title}</span><span class="task-status ${statusClass}">${statusText}</span></li>
     `;
    }
  }
  myList.innerHTML = html;
};

pendingTasks.addEventListener("click", () => {
  renderPendingTasks();
  allTasks.classList.remove("active");
  completedTasks.classList.remove("active");
  pendingTasks.classList.add("active");
});
