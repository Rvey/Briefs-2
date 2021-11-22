const subject = document.querySelector(".subject");
const date = document.querySelector(".date");
const selectedStudent = document.querySelector(".selectedStudent");
const lockedStudent = document.querySelector(".lockedStudent");
const submit = document.querySelector(".submit");


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

