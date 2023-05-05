let countEl = document.getElementById("count-el")
let savedEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function decrease() {
    if(count == 0)
		countEl.textContent = count
	else
	count -= 1
    countEl.textContent = count
}

function save() {
	let countStr = count + " - "
    savedEl.textContent += countStr
	countEl.textContent = 0
	count = 0
}
