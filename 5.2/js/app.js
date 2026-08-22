let tasks = [];
let users = [];
let existUsers = [];
const API_URL_TODO = "https://jsonplaceholder.typicode.com/todos?_limit=50";
const API_URL_USERS = "https://jsonplaceholder.typicode.com/users";
let searchText = "";
// // // Yazan's Way
// // counter variables
// const totalCount = document.querySelector("#totalCount");
// const completedCount = document.querySelector("#completedCount");
// const pendingCount = document.querySelector("#pendingCount");
// const completedRate = document.querySelector("#completedRate");
// const progressText = document.querySelector("#progressText");

// // filter variables
// const allTasks = document.querySelector("#allTasks");
// const completedTasks = document.querySelector("#completedTasks");
// const pendingTasks = document.querySelector("#pendingTasks");
// const searchInput = document.querySelector("#searchText");

// // list variable
// const myList = document.querySelector("#taskList");

// const updateStates = () => {
//   let comp = 0;
//   let pend = 0;
//   for (const task of tasks) {
//     if (task.completed) comp++;
//     else pend++;
//   }
//   totalCount.textContent = tasks.length;
//   completedCount.textContent = comp;
//   pendingCount.textContent = pend;
//   completedRate.textContent = Math.floor((100 * comp) / tasks.length) + " %";
// };
// updateStates();

// const renderAllTasks = () => {
//   let html = "";
//   for (const task of tasks) {
//     let statusClass = "pending";
//     let statusText = "Pending";
//     if (task.completed) {
//       statusClass = "completed";
//       statusText = "Completed";
//     }
//     html += `
//      <li class="task-item"> <span class="task-title">${task.title}</span><span class="task-status ${statusClass}">${statusText}</span></li>
//      `;
//   }
//   myList.innerHTML = html;
// };

// allTasks.addEventListener("click", () => {
//   renderAllTasks();
//   allTasks.classList.add("active");
//   completedTasks.classList.remove("active");
//   pendingTasks.classList.remove("active");
// });
// renderAllTasks();

// const renderCompletedTasks = () => {
//   let html = "";
//   for (const task of tasks) {
//     let statusClass = "completed";
//     let statusText = "Completed";
//     if (task.completed) {
//       html += `
//      <li class="task-item"> <span class="task-title">${task.title}</span><span class="task-status ${statusClass}">${statusText}</span></li>
//      `;
//     }
//   }
//   myList.innerHTML = html;
// };

// completedTasks.addEventListener("click", () => {
//   renderCompletedTasks();
//   completedTasks.classList.add("active");
//   allTasks.classList.remove("active");
//   pendingTasks.classList.remove("active");
// });

// const renderPendingTasks = () => {
//   let html = "";
//   for (const task of tasks) {
//     let statusClass = "pending";
//     let statusText = "Pending";
//     if (!task.completed) {
//       html += `
//      <li class="task-item"> <span class="task-title">${task.title}</span><span class="task-status ${statusClass}">${statusText}</span></li>
//      `;
//     }
//   }
//   myList.innerHTML = html;
// };

// pendingTasks.addEventListener("click", () => {
//   renderPendingTasks();
//   allTasks.classList.remove("active");
//   completedTasks.classList.remove("active");
//   pendingTasks.classList.add("active");
// });

// function updateProgressText() {
//   let completedCounter = 0;
//   for (const task of tasks) {
//     if (task.completed) completedCounter++;
//   }
//   progressText.textContent = `${completedCounter} of ${tasks.length} tasks completed.`;
// }
// updateProgressText();

// searchInput.addEventListener("input", () => {
//   searchText = searchInput.innerHTML;
// });
// // Nawar's Way
let currentFilter = "all";

const taskList = document.querySelector("#taskList");

const loadingMessage = document.querySelector("#loadingMessage");
const errorMessage = document.querySelector("#errorMessage");
const emptyMessage = document.querySelector("#emptyMessage");

const totalCount = document.querySelector("#totalCount");
const completedCount = document.querySelector("#completedCount");
const pendingCount = document.querySelector("#pendingCount");
const completedRate = document.querySelector("#completedRate");
const usersCount = document.querySelector("#usersCount");

const filterAllButton = document.querySelector("#allTasks");
const filterCompletedButton = document.querySelector("#completedTasks");
const filterPendingButton = document.querySelector("#pendingTasks");
const filterSearch = document.querySelector("#searchText");

const progressText = document.querySelector("#progressText");

// Load content tasks
async function loadTasks() {
  showLoading();
  // setTimeout(() => controller.abort(), 100);
  try {
    const response = await fetch(API_URL_TODO);
    tasks = await response.json();
    updateStats();
    renderTasks();
    updateProgressText();
    hideLoading();
    if (tasks.length == 0) {
      showEmpty();
    }
  } catch (error) {
    hideLoading();
    showError();
  }
}
async function loadUsers() {
  try {
    const response2 = await fetch(API_URL_USERS);
    users = await response2.json();
  } catch {
    console.log("Failed loading users.");
  }
}

// Count the tasks and write the numbers into the three cards.
function updateStats() {
  let completed = 0;
  let pending = 0;
  let usersC = existUsers.length;
  for (const task of tasks) {
    if (task.completed) {
      completed++;
    } else {
      pending++;
    }
  }

  totalCount.textContent = tasks.length;
  if (tasks.length == 0) {
    completedRate.textContent = 0 + "%";
  } else {
    completedRate.textContent =
      Math.floor((completed * 100) / tasks.length) + " %";
  }
  completedCount.textContent = completed;
  pendingCount.textContent = pending;
  usersCount.innerHTML = existUsers.length;
}

function updateProgressText() {
  let completedCounter = 0;
  for (const task of tasks) {
    if (task.completed) completedCounter++;
  }
  progressText.textContent = `${completedCounter} of ${tasks.length} tasks completed.`;
}

function getVisibleTasks() {
  const visibleTasks = [];

  for (const task of tasks) {
    let matchesFilter = false;

    if (currentFilter === "all") {
      matchesFilter = true;
    } else if (currentFilter === "completed" && task.completed) {
      matchesFilter = true;
    } else if (currentFilter === "pending" && !task.completed) {
      matchesFilter = true;
    }

    const title = task.title.toLowerCase();
    const search = searchText.toLowerCase();

    if (matchesFilter && title.includes(search)) visibleTasks.push(task);
  }

  return visibleTasks;
}

// Build the HTML for every task and put it on the page.
function renderTasks() {
  const visibleTasks = getVisibleTasks();
  let html = "";

  for (const task of visibleTasks) {
    let statusClass = "pending";
    let statusText = "Pending";
    if (task.completed) {
      statusClass = "completed";
      statusText = "Completed";
    }
    let name = getUserName(task.userId);
    countUsers(task.userId);
    html += `
            <li class="task-item">
                <span class="task-title">${task.title} <br><span class="username">The Task belongs to ${name}.</span></span>
                <span class="task-status ${statusClass}">${statusText}</span>
                
            </li>
        `;
  }
  taskList.innerHTML = html;
}

function setFilter(newFilter, clickedButton) {
  currentFilter = newFilter;

  filterAllButton.classList.remove("active");
  filterCompletedButton.classList.remove("active");
  filterPendingButton.classList.remove("active");

  clickedButton.classList.add("active");

  renderTasks();
}

function getUserName(userId) {
  let answer = "Undifined";
  for (const user of users) {
    if (userId == user.id) return user.name;
  }
  return answer;
}

function countUsers(userId) {
  for (const user of users) {
    if (userId == user.id && !existUsers.includes(user)) {
      existUsers.push(user);
    }
  }
}

filterAllButton.addEventListener("click", function () {
  setFilter("all", filterAllButton);
});

filterCompletedButton.addEventListener("click", function () {
  setFilter("completed", filterCompletedButton);
});

filterPendingButton.addEventListener("click", function () {
  setFilter("pending", filterPendingButton);
});
filterSearch.addEventListener("input", () => {
  searchText = filterSearch.value;
  renderTasks();
});

function showLoading() {
  loadingMessage.classList.remove("hidden");
  errorMessage.classList.add("hidden");
  emptyMessage.classList.add("hidden");
}
function hideLoading() {
  loadingMessage.classList.add("hidden");
}
function showError() {
  errorMessage.classList.remove("hidden");
}
function showEmpty() {
  emptyMessage.classList.remove("hidden");
}

loadUsers();
loadTasks();
