import "./index.css";

const btn = document.getElementById("btn");
const num = document.getElementById("num");

btn.addEventListener("click", function () {
  num.innerHTML = parseInt(num.innerHTML) + 1;
});

// Test fo babel
class Test {
  #a = 1;
}

const test = new Test();
console.log("test", test.a);
