//prepends all STARTING list items with a delete button (red minus vector)
var startingList = document.getElementsByTagName("li");
for(let i = 0; i < startingList.length; i++) {
    var deleteButtonImage = document.createElement("img");
    deleteButtonImage.src = "images/minus_sign.png";
    deleteButtonImage.className = "deleteButton";
    startingList[i].prepend(deleteButtonImage);
}
var deleteButton = document.getElementsByClassName("deleteButton");
for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].onclick = function() {
        var deletedTask = this.parentElement;
        deletedTask.style.display = "none";
    }
}

//adds strikethrough function to STARTING list items
for(let i = 0; i < startingList.length; i++) {
    startingList[i].addEventListener("click", function(){
        if(startingList[i].classList.contains('clicked')) {
            startingList[i].classList.remove('clicked');
        }
        else {
            startingList[i].classList.add('clicked');
        }
    });
}

//adds new task to the to-do list via the add button (green plus vector) with all of the necessary functions
function addNewTask() {
    var newListItem = document.createElement("li");
    var dueDate = document.getElementById("date").value;
    var inputValue = document.getElementById("input").value;
    if(dueDate == "" || inputValue == "") {
        alert("Both fields must be filled out. Please enter a valid due date and/or task.");
    } else{
        var task = " - ".concat(inputValue);
        newListItem.append(document.createTextNode(task));
        document.getElementById("list").appendChild(newListItem).prepend(dueDate);
        alert("Task successfully added!");
    }
    document.getElementById("date").value = "";
    document.getElementById("input").value = "";

    //prepends all NEW list items with a delete button (red minus vector)
    var deleteButtonImage = document.createElement("img");
    deleteButtonImage.src = "images/minus_sign.png";
    deleteButtonImage.className = "deleteButton";
    newListItem.prepend(deleteButtonImage);
    var deleteButton = document.getElementsByClassName("deleteButton");
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].onclick = function() {
            var deletedTask = deleteButton[i].parentElement;
            deletedTask.style.display = "none";
        }
    }

    //adds strikethrough function to NEW list items
    newListItem.addEventListener("click", function(){
        if(newListItem.classList.contains('clicked')) {
            newListItem.classList.remove('clicked');
        }
        else {
            newListItem.classList.add('clicked');
        }
    });
}