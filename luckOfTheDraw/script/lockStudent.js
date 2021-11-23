const subject = document.querySelector(".subject");
const date = document.querySelector(".date");
const selectedStudent = document.querySelector(".selectedStudent");
const lockedStudent = document.querySelector(".lockedStudent");
const submit = document.querySelector(".submit");

const remove = document.querySelector(".back");

submit.addEventListener("click", (e) => {
  //   e.preventDefault();
  const lockedStudent = {
    name: selectedStudent.innerHTML,
    subject: subject.value,
    date: date.value,
  };

  addStudentSubject(lockedStudent);
  deleteStudents(studentId.innerHTML);

  const filtered = students.filter((item) => item.id != studentId.innerHTML);
  sessionStorage.setItem("students", JSON.stringify(filtered));
});

remove.addEventListener("click", (e) => {
  fetch(selectedStudApi)
    .then((response) => response.json())
    .then((data) =>
      data.map((el) => {
        deleteAllSelected(el.id);
      })
    );
  fetch(studentApi)
    .then((response) => response.json())
    .then((data) =>
      data.map((el) => {
        deleteAllStudents(el.id);
      })
    );
  
});
