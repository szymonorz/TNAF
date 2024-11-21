const counterDiv = document.querySelector("div#counter")
const incBtn = document.querySelector("button#increment")
const chgColorBtn = document.querySelector("button#colorchange")

let number = 0;
counterDiv.innerHTML = number;
const colors = ["black", "red"]
let colorIdx = 0;
counterDiv.style.color=colors[colorIdx]

incBtn.addEventListener("click",  function (e) {
    number +=1;
    counterDiv.innerHTML = number;
})

chgColorBtn.addEventListener("click", function (e) {
    colorIdx = (colorIdx + 1) % 2;
    counterDiv.style.color = colors[colorIdx]
})


