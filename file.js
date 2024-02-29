//prepends all STARTING list items with a delete button (red minus vector)
var startingList = document.getElementsByTagName("li");
var i;
for(i = 0; i < startingList.length; i++) {
    var img = document.createElement("img");
    img.src = "images/minus_sign.png";
    img.className = "deleteButton";
    startingList[i].prepend(img);
}

var deleteButton = document.getElementsByClassName("deleteButton");
var i;
for (i = 0; i < deleteButton.length; i++) {
    deleteButton[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//adds new task to the to-do list via the add button (green plus vector)
function addNewTask() {
    var newListItem = document.createElement("li");
    var dueDate = document.getElementById("date").value;
    var inputValue = document.getElementById("input").value;
    if(dueDate == "" || inputValue == "") {
        alert("Please enter a valid due date or task.");
    } else{
        newListItem.append(document.createTextNode(" - ".concat(inputValue)));
        document.getElementById("list").appendChild(newListItem).prepend(dueDate);
        alert("Task successfully added!");
    }
    document.getElementById("date").value = "";
    document.getElementById("input").value = "";

    //prepends all NEW list items with a delete button (red minus vector)
    var img = document.createElement("img");
    img.src = "images/minus_sign.png";
    img.className = "deleteButton";
    newListItem.prepend(img);

    var deleteButton = document.getElementsByClassName("deleteButton");
    var i;
    for (i = 0; i < deleteButton.length; i++) {
        deleteButton[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//strikethrough list items that were clicked on
var toDoList = document.querySelector("ul");
toDoList.addEventListener("click", function(ev) {
    if (ev.target.tagName === "li") {
        ev.target.classList.toggle('clicked');
    }   
});