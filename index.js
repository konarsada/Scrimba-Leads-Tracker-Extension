let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (Boolean(leadsFromLocalStorage)) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads()

    console.log(JSON.parse(localStorage.getItem("myLeads")))
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads.length = 0
    renderLeads()
})

function renderLeads() {
    let listItems = ""

    for (let item of myLeads) {
        listItems += `
            <li>
                <a target='_blank' href='${item}'>
                    ${item}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems  
}