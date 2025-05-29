function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  // Create new list item
  const li = document.createElement("li");

  // Create span to hold the task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);

  // Mark as Done button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Mark as Done";
  doneBtn.classList.add("mark-done");
  doneBtn.onclick = () => {
    taskSpan.classList.toggle("done");
    if (taskSpan.classList.contains("done")) {
      doneBtn.textContent = "Undo";
    } else {
      doneBtn.textContent = "Mark as Done";
    }
  };
  li.appendChild(doneBtn);

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", taskSpan.textContent);
    if (newText !== null && newText.trim() !== "") {
      taskSpan.textContent = newText.trim();
    }
  };
  li.appendChild(editBtn);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}

