let countEl = document.getElementById("count-el")
let previousDisplay = document.getElementById("previous-display")

let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

function decrement() {
  count -= 1
  countEl.textContent = count
}

function save() {
  previousDisplay.textContent += count + " - "
}

function restart() {
  location.reload()
}
