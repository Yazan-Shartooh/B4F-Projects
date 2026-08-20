const tasks = [
  { id: 1, title: "Create the taskflow page.", completed: true },
  { id: 2, title: "Finish the JavaScript file", completed: false },
  { id: 3, title: "Make the elements responsive", completed: true },
  { id: 4, title: "Finished the second homework.", completed: false },
  { id: 5, title: "Give the page some styling.", completed: true },
  { id: 6, title: "Finished the first homework.", completed: true },
  { id: 7, title: "Started the second homework.", completed: false },
  { id: 8, title: "Read about JavaScript objects.", completed: true },
  { id: 9, title: "Prepare questions for the next session.", completed: false },
];
// // // Yazan's Way
// // counter variables
// const totalCount = document.querySelector("#totalCount");
// const completedCount = document.querySelector("#completedCount");
// const pendingCount = document.querySelector("#pendingCount");
// const completedRate = document.querySelector("#completedRate");

// // filter variables
// const allTasks = document.querySelector("#allTasks");
// const completedTasks = document.querySelector("#completedTasks");
// const pendingTasks = document.querySelector("#pendingTasks");

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

// // // Nawar's Way
let currentFilter = "all";

const taskList = document.querySelector("#taskList");

const totalCount = document.querySelector("#totalCount");
const completedCount = document.querySelector("#completedCount");
const pendingCount = document.querySelector("#pendingCount");
const completedRate = document.querySelector("#completedRate");

const filterAllButton = document.querySelector("#allTasks");
const filterCompletedButton = document.querySelector("#completedTasks");
const filterPendingButton = document.querySelector("#pendingTasks");

const progressText = document.querySelector("#progressText");

// Count the tasks and write the numbers into the three cards.
function updateStats() {
  let completed = 0;
  let pending = 0;

  for (const task of tasks) {
    if (task.completed) {
      completed++;
    } else {
      pending++;
    }
  }

  totalCount.textContent = tasks.length;
  completedRate.textContent =
    Math.floor((completed * 100) / tasks.length) + " %";
  completedCount.textContent = completed;
  pendingCount.textContent = pending;
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
    if (currentFilter === "all") {
      visibleTasks.push(task);
    } else if (currentFilter === "completed" && task.completed) {
      visibleTasks.push(task);
    } else if (currentFilter === "pending" && !task.completed) {
      visibleTasks.push(task);
    }
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

    html += `
            <li class="task-item">
                <span class="task-title">${task.title}</span>
                <span class="task-status ${statusClass}">${statusText}</span>
            </li>
        `;
  }

  //   console.log(html);

  taskList.innerHTML = html;
}

function setFilter(newFilter, clickedButton) {
  currentFilter = newFilter;

  console.log(newFilter);
  console.log(newFilter);

  filterAllButton.classList.remove("active");
  filterCompletedButton.classList.remove("active");
  filterPendingButton.classList.remove("active");

  clickedButton.classList.add("active");

  renderTasks();
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

updateStats();
renderTasks();
updateProgressText();
