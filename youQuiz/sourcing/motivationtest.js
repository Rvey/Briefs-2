const user = JSON.parse(sessionStorage.getItem('currentUser'))
const redirect = document.querySelector('form')

redirect.addEventListener('submit' , e  => {
    e.preventDefault()
    const Motivation = {Motivation : redirect.message.value}
    fetch(`http://localhost:3000/candidates/${user.id}`, {
    method: "PATCH",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(Motivation),
  }).then(() => {
    window.location.replace("./testSeriousGames.html");
  })
})