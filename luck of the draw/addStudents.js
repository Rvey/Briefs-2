const addName = document.querySelector(".add");
const studentList = document.querySelector(".studentList");
const nameInput = document.querySelector(".nameInput");
const studentCount = document.querySelector(".studentCount");
const count = document.querySelector(".count");
const save = document.querySelector(".save");
const Count = JSON.parse(sessionStorage.getItem("count"));
const students = JSON.parse(sessionStorage.getItem("students"));


addName.addEventListener("submit", (e) => {
  e.preventDefault();
  const studentName = {
    name: addName.add.value,
    color: Math.floor(Math.random() * 16777215).toString(16),
  };

  addStudents(studentName);
  addName.reset();
});

studentList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    deleteStudents(e.target.id);
    nameInput.disabled = false;
  }
});

