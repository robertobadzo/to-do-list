 

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
    newElementWrapper.classList.add("newElementWrapper")
    const newElementTitle = document.createElement("div")
    const newElementDesc = document.createElement("div")
    const newElementCheckBox = document.createElement("input")
    const newElementRemove = document.createElement("button")
            newElementRemove.addEventListener("click", (e) => removeTask(e))
    newElementRemove.innerHTML = "Remove"
    newElementCheckBox.type = "checkbox"
    newElementTitle.innerHTML = `Title: ${parameter.title}`
    newElementDesc.innerHTML = `Description: ${parameter.description}`
    newElementWrapper.appendChild(newElementTitle)
    newElementWrapper.appendChild(newElementDesc)
    newElementWrapper.appendChild(newElementCheckBox)
    newElementWrapper.appendChild(newElementRemove)
    tasksDiv.appendChild(newElementWrapper)
    clearInputs()
    title.focus()


}
function clearInputs() {
    title.value = ""
    description.value = ""
}
function removeTask(e) {
    e.target.parentElement.remove()
}



//Get Html Elements
const submitElement = document.getElementById("submit")
const title = document.getElementById("title")
const description = document.getElementById("description")
const titleElement = document.getElementById("task-title")
const descriptionElement = document.getElementById("task-description")
const tasksDiv = document.getElementById("tasks")



submitElement.addEventListener("click", saveTask)
document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") saveTask()
})





