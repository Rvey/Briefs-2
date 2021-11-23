const studentApi = "http://localhost:3000/students/";
const selectedStudApi = "http://localhost:3000/lockedStudents/";

const addStudents = (studentName) => {
  fetch(studentApi, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentName),
  });
};

const deleteStudents = (id) => {
  fetch(studentApi + id, {
    method: "DELETE",
  }).then((res) => res.json());
  const filtered = students.filter((item) => item.id != id);
  sessionStorage.setItem("students", JSON.stringify(filtered));
};
const deleteAllStudents = (id) => {
  fetch(studentApi + id, {
    method: "DELETE",
  }).then((res) => res.json());
};

const deleteAllSelected = (id) => {
  fetch(selectedStudApi + id, {
    method: "DELETE",
  }).then((res) => res.json());
};



fetch(studentApi)
  .then((response) => response.json())
  .then((data) => {
    sessionStorage.setItem("students", JSON.stringify(data));
    data.map((el) => {
      studentList.innerHTML += `
      <li class="list">
          <div class="flex justify-between p-1 bg-indigo-50 rounded-md">
            <div class="w-3 rounded" style="background-color: #${el.color} ;"></div>
            <h2 class=" w-96 pl-2 ">${el.name}</h2>
            <button class="bg-red-300 px-3 rounded-md text-sm text-red-800 hover:bg-red-400 delete" id=${el.id}>delete</button>
          </div>
        </li>
      
      `;
    });
  });

const fetchData = () => {
  fetch(studentApi)
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem("students", JSON.stringify(data));
    });
};

// INIT CIRCLE
fetch(studentApi)
  .then((response) => response.json())
  .then((data) => {
    data.map((sector, i) => {
      drawSector(sector, i);
    });
  });

const addStudentSubject = (student) => {
  fetch(selectedStudApi, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(student),
  });
};

fetch(selectedStudApi)
  .then((response) => response.json())
  .then((data) => {
    sessionStorage.setItem("selectedStudent", JSON.stringify(data));

    data.map((el) => {
      lockedStudent.innerHTML += `
      <li >
      <div class="flex justify-between p-1 bg-indigo-50 rounded-md">
        <div class="w-3 rounded" style="background-color: #${el.color};"></div>
        <h2 class=" w-96 pl-2 ">${el.name}</h2>
        <h2 class=" w-96 pl-2 ">${el.subject}</h2>
        <h2 class=" w-96 pr-2 text-center bg-indigo-400 rounded-md text-white">${el.date}</h2>
      </div>
    </li>
      `;
    });
  });
