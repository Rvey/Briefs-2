const user = JSON.parse(sessionStorage.getItem('currentUser'))
const redirect = document.querySelector('form')

redirect.addEventListener('submit' , e  => {
    e.preventDefault()
const seriousGames  = {seriousGames : redirect.message.value}
  fetch(`http://localhost:3000/candidates/${user.id}`, {
    method: "PATCH",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(seriousGames),
  }).then(() => {
    window.location.replace("./home.html");
  })
  window.location.replace("./administrationTest.html");
})