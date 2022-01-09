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
        })
        .then((res) => res.json())
        .then((data) => {
            const admin = {
                email: data.email,
                id: data.id,
                role: data.role,
                rayon: data.rayon
            }

            sessionStorage.setItem('admin', JSON.stringify(admin)


            )
        }).then(() => {
            const currentAdmin = JSON.parse(sessionStorage.getItem('admin'))
            fetch('http://localhost:8082/promotion')
                .then((res) => res.json())
                .then((data) => {
                    data.map((promo) => {
                        if (currentAdmin.rayon == promo.rayon)
                            fetch(`http://localhost:8082/updatePSOnLogin/${promo.id}`, {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    status: 'on hold'
                                }),
                            })
                    })
                }).then(() => {

                    location.replace('/promotionPanel')
                })

        })
})