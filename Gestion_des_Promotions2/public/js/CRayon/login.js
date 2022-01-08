const loginForm = document.querySelector('.loginForm')
loginForm.addEventListener('submit', e => {
    e.preventDefault()
    const admin = {
        email: loginForm.email.value,
        password: loginForm.password.value
    }
    fetch("http://localhost:8082/login/RA", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
      }).then((res) =>  {
          if(res.status == 200) {
              location.replace('/promotionPanel')
          }else{
              console.log('wrong creds');
          }
      })
})