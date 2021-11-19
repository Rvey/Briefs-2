const form = document.querySelector(".addStudents");
const students = [];
const json = "./data/student.json";
const studentName = document.querySelector(".name");
const date = document.querySelector(".date");
const sujet = document.querySelector(".sujet");
const studentList = document.querySelector(".students");
const test = document.querySelector(".test");
const add = document.querySelector(".data");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const student = {
    studentName: studentName.value,
    date: date.value,
    sujet: sujet.value,
  };
  fetch("http://localhost:8000/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
});

test.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("./data/student.json")
    .then((res) => res.json())
    .then((data) => {
      sessionStorage.setItem("students", JSON.stringify(data.students));
      console.log(data.students);
    })
    .catch((err) => console.error(err));

  let ehe = JSON.parse(sessionStorage.getItem("students"));

  const removeStudent = (id) => {
    console.log(id);
  };

  ehe.map((el) => {
    add.innerHTML += `
  
    <li>
      <span> Student Name </span> :    ${el.id}
     </li>
     <li>
     <span> date </span> : ${el.date}
     </li>
     <li>
     <span> subject </span> : ${el.sujet}
     </li>
     <li>
     
     </li>
    
     
     `;
  });
});
