const rbtn = document.getElementById("rbtn");
const pbtn = document.getElementById("pbtn");
const sbtn = document.getElementById("sbtn");

sbtn.addEventListener("click", () => {
  let rand = giveRandom();
  if (rand == 1) confirm("You Lose, Rocks beats Scissors");
  else if (rand == 2) confirm("You Win, Scissors beats Papers");
  else confirm("Draw");
});
pbtn.addEventListener("click", () => {
  let rand = giveRandom();
  if (rand == 1) confirm("You Win, Papers beats Rocks");
  else if (rand == 2) confirm("Draw");
  else confirm("You Lose, Scissors beats Papers");
});
rbtn.addEventListener("click", () => {
  let rand = giveRandom();
  if (rand == 1) confirm("Draw");
  else if (rand == 2) confirm("You Lose, Papers beats Rocks");
  else confirm("You Win, Rocks beats Scissors");
});

const giveRandom = () => {
  return (Math.floor(Math.random() * 10) % 3) + 1;
};
