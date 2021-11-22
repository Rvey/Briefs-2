const addStudents = (studentName) => {
  fetch("http://localhost:8000/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentName),
  });
  
};

const deleteStudents = (id) => {
  fetch("http://localhost:8000/students/" + id, {
    method: "DELETE",
  }).then((res) => res.json());
  const filtered = students.filter((item) => item.id != id);
  sessionStorage.setItem("students", JSON.stringify(filtered));
};

fetch("http://localhost:8000/students/")
  .then((response) => response.json())
  .then((data) => {
    sessionStorage.setItem("students", JSON.stringify(data));
    data.map((el) => {
      studentList.innerHTML += `<li>
      <span class="text-center">${el.name}</span>
          <button type="button" class="delete" id=${el.id} >delete</button>
      </li>`;
    });
  });
const addStudentSubject = (student) => {
  fetch("http://localhost:8000/lockedStudents", {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(student),
  });
};

fetch("http://localhost:8000/lockedStudents/")
  .then((response) => response.json())
  .then((data) => {
    sessionStorage.setItem("selectedStudent", JSON.stringify(data));

    data.map((el) => {
      lockedStudent.innerHTML += `<li>
      <span class="text-center">${el.name}</span>
      <span class="text-center">${el.subject}</span>
      <span class="text-center">${el.date}</span>
          <button type="button" class="delete" id=${el.id} >delete</button>
      </li>`;
    });
  });

const fetchData = () => {
  fetch("http://localhost:8000/students/")
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem("students", JSON.stringify(data));
    });
};
