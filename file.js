//implements add function to the add button (green plus vector) and prepends each list item with a delete button (red minus vector)
function addNewTask() {
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

    var img = document.createElement("img");
    img.src = "images/minus_sign.png";
    img.className = "deleteButton";
    newListItem.prepend(img);
}