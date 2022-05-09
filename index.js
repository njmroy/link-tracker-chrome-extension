let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

localStorage.setItem("myLeads", "www.example.com")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
})

function renderLeads() { 
    let listItems = "";
    for (let i=0; i<myLeads.length;i++) {
        //ulEl.innerHTML += `<li> ${myLeads[i]} </li>`;
        listItems += `
        <li>
            <a target="_blank" href="${myLeads[i]}"> ${myLeads[i]} </a> 
        </li>
        `;
        //Same method as above but split up. 
        //Create new li element 
        // makes <li></li>
        //const li = document.createElement("li");

        //Add leads as text content of newly made list element
        //makes <li> myLeads[i] </li>
        //li.textContent = myLeads[i];

        //Add list item to unordered list element 
        //Connects <li> myLeads[i] </li> to unordered list element
        //ulEl.append(li);

    }
    //DOM manipulation has a cost and should be done outside of loops. 
    ulEl.innerHTML = listItems;

}