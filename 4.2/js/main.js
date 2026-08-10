myFunc2 = () => {
  document.getElementById("result2").innerHTML =
    document.getElementById("input2").value * 0.621;
};
myFunc1 = () => {
  document.getElementById("result1").innerHTML =
    document.getElementById("input1").value * 2.205;
};

bmi = () => {
  document.getElementById("bmi").innerHTML =
    document.getElementById("hight").value /
    Math.pow(document.getElementById("weight").value, 2);
};
