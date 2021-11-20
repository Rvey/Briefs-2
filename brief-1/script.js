const addStudent = document.querySelector(".addStudent");
const students = [];
const studentName = document.querySelector(".name");
// const date = document.querySelector(".date");
// const subject = document.querySelector(".subject");
const test = document.querySelector(".test");
const list = document.querySelector(".data");















let Tstudents = JSON.parse(sessionStorage.getItem("students"));
addStudent.addEventListener("click", (e) => {
  e.preventDefault();
  const student = {
    studentName: studentName.value,
  };
  students.push(student);
  sessionStorage.setItem("students", JSON.stringify(students));
  console.log(students);
  students.forEach(el => {
    list.innerHTML += `
          <li>
          <span> Student Name </span> : ${el.studentName}
          </li>
        
             `;
  });
  // addStudents(e, student);
  // fetchResult(e);
});

// list.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete")) {
//     deleteStudent(e, e.target.id);
//   }
// });

// const addStudents = (e, student) => {
//   e.preventDefault();
//   fetch("http://localhost:8000/students", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(student),
//   }).then(() => fetchResult(e));
// };

// const fetchResult = (e) => {
//   e.preventDefault();
//   // fetch("./data/student.json")
//   //   .then((res) => res.json())
//   //   .then((data) => {
//   //     //   sessionStorage.setItem("students", JSON.stringify(data.students));

//   //   });
//   students.map((el) => {
//     list.innerHTML += `
//       <li>
//       <span> Student Name </span> : ${el.studentName}
//       </li>
//          <button class="delete" id=${el.id} >
//          delete
//          </button>
//          `;
//   });
//   console.log(students);
// };

// const deleteStudent = (e, id) => {
//   e.preventDefault();
//   fetch("http://localhost:8000/students/" + id, {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };

// test.addEventListener("click", (e) => {
//   e.preventDefault();
//   fetch("./data/student.json")
//     .then((res) => res.json())
//     .then((data) => {
//       sessionStorage.setItem("students", JSON.stringify(data.students));
//     })
//     .catch((err) => console.error(err));

//   students.map((el) => {
//     list.innerHTML += `

//     <li>
//       <span> Student Name </span> : ${el.studentName}
//      </li>
//      <li>
//      <span> date </span> : ${el.date}
//      </li>
//      <li>
//      <span> subject </span> : ${el.subject}
//      </li>
//      <button class="delete" id=${el.id} >
//      delete
//      </button>
//      `;
//   });
//   const item = students[Math.floor(Math.random() * students.length)];
//   console.log(item);
// });
