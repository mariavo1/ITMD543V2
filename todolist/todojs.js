const text = document.getElementById("text");
const list = document.getElementById("list");

function addTask() {
    if(text.value === ''){
        alert("Cannot be blank!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = text.value;
        list.appendChild(li);
    }
    text.value = "";
}