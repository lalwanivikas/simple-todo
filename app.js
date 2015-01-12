var taskInput = document.getElementById("newTask");
var taskList = document.querySelector("ul");

var addTask = function() {
	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	var label = document.createElement("label");

	checkBox.type = "checkbox";
	label.innerHTML = taskInput.value;

	listItem.appendChild(checkBox);
	listItem.appendChild(label);

	listItem.className = "taskList"

	//preventing empty tasks from being added. only if someone enters a task, it should get added.
	if (taskInput.value) {
		taskList.insertBefore(listItem, taskList.firstChild);
	} else {
		alert("please enter a task");
	}
	
	//after adding the task, the input box should be empty
	taskInput.value = "";

	//adding an event listener to checkbox so that whenever it is checked, the task is deleted
	checkBox.addEventListener("change", deleteTask);
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

