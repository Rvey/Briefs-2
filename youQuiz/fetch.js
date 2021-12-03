
const UsersPort = "http://localhost:3000/users/";
const CandidatePort = "http://localhost:3000/candidates/";


const addUser = (user) => {
  fetch(UsersPort, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};



const getCandidate = () => {
  fetch(CandidatePort)
    .then((response) => response.json())
    .then((data) => sessionStorage.setItem("currentUser" ,  JSON.stringify(data.slice(-1)[0])));
};


const addCandidate = (candidate) => {
  fetch(CandidatePort, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(candidate),
  });
};

const updateCandidate = (candidate, id) => {
  fetch(`http://localhost:3000/candidates/${id}`, {
    method: "PUT",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(candidate),
  })
};

getCandidate();
