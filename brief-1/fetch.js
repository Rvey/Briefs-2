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
