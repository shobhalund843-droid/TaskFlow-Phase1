function addTask() {
  let title = document.getElementById("title").value;
  let error = document.getElementById("error");

  if (title === "") {
    error.innerText = "Task title is required";
    return;
  }

  error.innerText = "";

  let li = document.createElement("li");
  li.innerHTML = title + ' <button onclick="deleteTask(this)">Delete</button>';

  document.getElementById("taskList").appendChild(li);

  document.getElementById("title").value = "";
}

function deleteTask(btn) {
  btn.parentElement.remove();
}
