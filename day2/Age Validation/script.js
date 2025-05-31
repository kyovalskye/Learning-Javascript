const myInput = document.getElementById("myInput");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

mySubmit.onclick = function () {
  if (myInput.value > 18) {
    result.innerText = "Youre allowed to enter this site";
  } else {
    result.innerText = "Youre not allowed to enter this site";
  }
};
