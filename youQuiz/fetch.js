const UsersPort = "http://localhost:3000/users/";
const CandidatePort = "http://localhost:3000/candidates/";
const getUsers = () => {
  fetch(UsersPort)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

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
    .then((data) => console.log(data));
};

const addCandidate = (candidate) => {
  fetch(CandidatePort, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(candidate),
  });
};

getCandidate();
getUsers();
