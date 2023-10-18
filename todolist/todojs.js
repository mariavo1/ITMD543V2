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
    save();
}

list.addEventListener("click", function(env){
    if(env.target.tagName === "LI") {
        env.target.classList.toggle("item");
    }
    else if(env.target.tagName === "SPAN") {
        env.target.parentElement.remove();
    }
}, false); 

function save() {
    localStorage.setItem("data", list.innerHTML);
}

