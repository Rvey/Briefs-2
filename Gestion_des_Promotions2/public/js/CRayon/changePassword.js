const changePassword = document.querySelector('.changePassword')
changePassword.addEventListener('submit', e => {
    e.preventDefault()
    const password = {
        password: changePassword.password.value,
        newPassword: changePassword.NewPassword.value
    }
    fetch("http://localhost:8082/updatePass/CA", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(password),
    }).then((res) => {
        if (res.status == 201) {
            location.replace('/CRALogin')
        } else {
            console.log('worg password');
        }
    })
})