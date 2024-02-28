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
}