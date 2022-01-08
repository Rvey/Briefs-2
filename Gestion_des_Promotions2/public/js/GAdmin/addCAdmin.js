
const ShowAddModal = document.querySelector(".add");
const overlayA = document.querySelector(".clickov");
const AddModal = document.querySelector(".addForm");
const center  = document.querySelector('.center');
const error = document.querySelector('.error');
const save = document.querySelector('.save')

ShowAddModal.addEventListener("click", (e) => {
    fetch('http://localhost:8082/AdminCenter' , )
    AddModal.classList.remove("hidden");
});

overlayA.addEventListener("click", (e) => {
    AddModal.classList.add("hidden");
});

// add mew admin
save.addEventListener("click", (e) => {
    const admin = {
        firstName: AddModal.firstName.value,
        lastName: AddModal.lastName.value,
        email: AddModal.email.value,
        center:center.value,
        vocation: "no",
    };
    fetch(`http://localhost:8082/AdminCenter`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
    })
        .then((res) => {
            if (res.status == 200) {

                fetch(`http://localhost:8082/validation/CA`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: admin.email }),
                }).then(() => location.replace('/GAdminDash'))
            }else {
                error.classList.remove("hidden");
                setTimeout(() => {
                error.classList.add("hidden");
                }, 2000);
            }
        })

       
});
