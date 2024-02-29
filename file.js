function addNewTask() {
    //implements add task function to the add button (green plus vector)
    var newListItem = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    newListItem.append(document.createTextNode(inputValue));
    if(inputValue == "") {
        alert("Please enter a task.");
    } else{
        document.getElementById("list").appendChild(newListItem);
        alert("Task successfully added!");
    }
    document.getElementById("input").value = "";

    //prepends all NEWLY MADE list items with a delete button (red minus vector)
    var img = document.createElement("img");
    img.src = "images/minus_sign.png";
    img.className = "deleteButton";
    newListItem.prepend(img);

    //implements delete task function to all delete buttons (red minus vector) for NEWLY MADE list items
    var deleteButton = document.getElementsByClassName("deleteButton");
    var i;
    for (i = 0; i < deleteButton.length; i++) {
        deleteButton[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//prepends all STARTING list items with a delete button (red minus vector)
var startingList = document.getElementsByTagName("li");
var i;
for(i = 0; i < startingList.length; i++) {
    var img = document.createElement("img");
    img.src = "images/minus_sign.png";
    img.className = "deleteButton";
    startingList[i].prepend(img);
}

//implements delete task function to all delete buttons (red minus vector) in the STARTING list
var deleteButton = document.getElementsByClassName("deleteButton");
var i;
for (i = 0; i < deleteButton.length; i++) {
    deleteButton[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}