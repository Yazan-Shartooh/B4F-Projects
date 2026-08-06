const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".btn-next");
const prevBtns = document.querySelectorAll(".btn-prev");
const indicators = document.querySelectorAll(".step-indicator");
const progressLine = document.getElementById("progressLine");

let currentStep = 0;

// Handle Next Button Action
nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Simple client side validation verification check
    const inputs = formSteps[currentStep].querySelectorAll("input");
    let allValid = true;
    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        input.reportValidity();
        allValid = false;
      }
    });

    if (allValid && currentStep < formSteps.length - 1) {
      currentStep++;
      updateFormSteps();
    }
  });
});

// Handle Previous Button Action
prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateFormSteps();
    }
  });
});

// Update visibility and step layout indicators
function updateFormSteps() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });

  indicators.forEach((indicator, index) => {
    if (index < currentStep) {
      indicator.classList.add("completed");
      indicator.classList.remove("active");
    } else if (index === currentStep) {
      indicator.classList.add("active");
      indicator.classList.remove("completed");
    } else {
      indicator.classList.remove("active", "completed");
    }
  });

  // Update progress line calculation values
  const progressPercent = (currentStep / (indicators.length - 1)) * 100;
  progressLine.style.width = progressPercent + "%";
}
