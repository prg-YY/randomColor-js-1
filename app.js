const colorBtn = document.querySelector("#btn-1")
const boxes = document.querySelectorAll(".box")

let runnig = false

function getRandomColor() {
  let letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function start() {
  if (runnig) {
    boxes.forEach((color) => {
      color.style.background = getRandomColor()
    })
    setTimeout(start, 100)
  }
}

colorBtn.addEventListener("click", function () {
  colorBtn.innerText = "STOP"
  if (runnig) {
    runnig = false
    colorBtn.innerText = "CHANGE COLOR"
  } else {
    runnig = true
    start()
  }
})
