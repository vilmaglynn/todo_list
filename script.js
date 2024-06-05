let addBtn = document.getElementById("addBtn");
let tasklist = document.getElementById("tasklist");
let task = document.getElementById("task");

addBtn.addEventListener("click", function () {
  if (task.value.trim() !== "") {
    // Check if the input field is not empty
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = task.value;
    tasklist.appendChild(paragraph);
    task.value = "";

    paragraph.addEventListener("click", function () {
      paragraph.classList.toggle("line-through");
    });

    paragraph.addEventListener("dblclick", function () {
      tasklist.removeChild(paragraph);
    });
  }
});
