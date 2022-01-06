const changePassword = document.querySelector('.changePassword')
changePassword.addEventListener('submit' , e => {
    e.preventDefault()
   console.log(changePassword.NewPassword.value);
  })