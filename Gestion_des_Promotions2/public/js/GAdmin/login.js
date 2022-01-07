const loginForm = document.querySelector(".loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const body = {
    email: loginForm.email.value,
    password: loginForm.password.value,
  };
  fetch("http://localhost:8082/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) =>  {
      if(res.status == 201) {
          location.replace('/GAdminDash')
      }else{
          console.log('wrong creds');
      }
  })
});
