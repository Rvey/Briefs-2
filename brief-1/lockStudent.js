const subject = document.querySelector(".subject");
const date = document.querySelector(".date");
const selectedStudent = document.querySelector(".selectedStudent");
const lockedStudent = document.querySelector(".lockedStudent")
const submit = document.querySelector(".submit");

submit.addEventListener("click", async (e) => {
//   e.preventDefault();
  const lockedStudent = {
    name: selectedStudent.innerHTML,
    subject: subject.value,
    date: date.value,
  };

  addStudentSubject(lockedStudent)
  deleteStudents(studentId.innerHTML)
  
  window.location.reload();
});
