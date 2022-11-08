//Get Html Elements
const submitElement = document.getElementById("submit")
const title = document.getElementById("title")
const description = document.getElementById("description")
const titleElement = document.getElementById("task-title")
const descriptionElement = document.getElementById("task-description")
const tasksDiv = document.getElementById("tasks")



class Task {
    constructor(title, description) {
        this.title = title
        this.description = description
        this.completed = false
    }
}


function saveTask() {
    if (title.value === "" || description.value === "") return
    const newTask = new Task(title.value, description.value)
    displayTask(newTask)

}
function displayTask(parameter) {
    const newElementWrapper = document.createElement("div")
    const newElementTitle = document.createElement("div")
    const newElementDesc = document.createElement("div")
    const newElementDate = document.createElement("p")
    const newElementCheckBox = document.createElement("input")
    const newElementRemove = document.createElement("button")
    newElementRemove.classList.add("remove")
    newElementWrapper.classList.add("newElementWrapper")
    const currentDate = new Date
    newElementCheckBox.type = "checkbox"
    newElementRemove.addEventListener("click", (e) => removeTask(e))
    newElementDate.innerHTML = `Date created: ${currentDate}`
    newElementRemove.innerHTML = "Remove"
    newElementTitle.innerHTML = `Title: ${parameter.title}`
    newElementDesc.innerHTML = `Description: ${parameter.description}`
    newElementWrapper.id = currentDate
    newElementWrapper.appendChild(newElementTitle)
    newElementWrapper.appendChild(newElementDesc)
    newElementWrapper.appendChild(newElementDate)
    newElementWrapper.appendChild(newElementCheckBox)
    newElementWrapper.appendChild(newElementRemove)
    saveToLocal(currentDate, newElementWrapper.outerHTML)
    tasksDiv.appendChild(newElementWrapper)
    clearInputs()
    title.focus()

}
function clearInputs() {
    title.value = ""
    description.value = ""
}

function removeTask(e) {
    localStorage.removeItem(e.target.parentElement.id)
    e.target.parentElement.remove()
}


function saveToLocal(currentDate, parameter) {
    localStorage.setItem(currentDate, parameter)
}

function displayLocal /*And add event listener to elements created after fetching local*/() {
    let l = localStorage.length
    for (i = 0; i < l; i++) {
        const fetchedTask = localStorage.getItem(localStorage.key(i))
        tasksDiv.innerHTML += fetchedTask
    }
    l = localStorage.length
    for (i = 0; i < l; i++) {
        document.getElementById(localStorage.key(i)).childNodes[4].addEventListener("click", (e) => removeTask(e))
        console.log(document.getElementById(localStorage.key(i)).childNodes[4])
    }
}

displayLocal()

submitElement.addEventListener("click", saveTask)
document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") saveTask()
})





