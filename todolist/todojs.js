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
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    text.value = "";
}