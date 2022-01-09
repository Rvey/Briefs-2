const admin = document.querySelector('.currentUser')
const logout = document.querySelector('.logout')

// get the current user from localStorage
const currentAdmin = JSON.parse(sessionStorage.getItem('admin'))

// show current user
admin.innerHTML = `${currentAdmin.email} | ${currentAdmin.role}`

// logout
logout.addEventListener('click' , e => {
    fetch('http://localhost:8082/logout').then(() => location.reload())
})

