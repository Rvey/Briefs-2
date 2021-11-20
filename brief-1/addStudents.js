const addName = document.querySelector(".add");
const studentList = document.querySelector(".studentList");
const nameInput = document.querySelector(".nameInput");
const studentCount = document.querySelector(".studentCount");
const count = document.querySelector(".count");
let Count = 0;
const students = [];

const generateStudentList = (studentName) => {
  const html = `
    <li>
    <span>${studentName}</span>
    <span class="delete">remove</span>
    </li>
    `;
  studentList.innerHTML += html;
  if (studentList.getElementsByTagName("li").length >= Count) {
    nameInput.disabled = true;
  } else if (studentList.getElementsByTagName("li").length >= Count) {
    nameInput.disabled = false;
  }
};

studentCount.addEventListener("change", (e) => {
  count.innerHTML = e.target.value;
  Count = e.target.value;
});
addName.addEventListener("submit", (e) => {
  e.preventDefault();
  const studentName = addName.add.value;

  if (studentName.length >= 3) {
    generateStudentList(studentName);
    addName.classList.remove("delete");
    addName.reset();
  } else if (studentName.length <= 2) {
    addName.classList.add("border-red-300");
  }
  console.log();
});

studentList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    nameInput.disabled = false;
  }
});
