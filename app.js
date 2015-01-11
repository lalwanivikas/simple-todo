var taskInput = document.getElementById("newTask");
var taskList = document.querySelector("ul");
var checkBox = taskList.querySelector("input[type=checkbox]");

console.log(checkBox);

var addTask = function() {
	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	var label = document.createElement("label");

	checkBox.type = "checkbox";
	label.innerHTML = taskInput.value;

	listItem.appendChild(checkBox);
	listItem.appendChild(label);

	listItem.className = "taskList"

	if (taskInput.value) {
		taskList.appendChild(listItem);
	} else {
		alert("please enter a task");
	}
	
	taskInput.value = "";
};

var deleteTask = function() {

	console.log("event");
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//remove the parent list item from ul
	ul.removeChild(listItem);
};

taskInput.addEventListener("keyup", function(e) {
	console.log("Event Tiggered");
	if(e.keyCode === 13) {
		addTask();
	}
});

checkBox.addEventListener("change", deleteTask);

