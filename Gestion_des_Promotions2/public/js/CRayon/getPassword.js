const getPassForm = document.querySelector(".getPassForm");

getPassForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const body = {
    email: getPassForm.email.value
  };
  fetch("http://localhost:8082/validation/RA", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) =>  {
      if(res.status == 201) {
          // location.replace('/GAdminDash')
          getPassForm.innerHTML = `<div class="text-center">your password will be sent to your email</div> <div class="text-center">redirect to change your password ...</div> `
          setTimeout(() => {
            location.replace('/RAChangePass')
          }, 3000)
      }else{
          console.log('wrong creds');
      }
  })
});
