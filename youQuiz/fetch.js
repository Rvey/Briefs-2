const users = 'http://localhost:3000/users/'
const fetchData = (path) => {
    fetch(users)
    .then((response) => response.json)
    .then((data) => console.log(data));
};

const addUsers = (userData) => {
  fetch(userData, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
};
