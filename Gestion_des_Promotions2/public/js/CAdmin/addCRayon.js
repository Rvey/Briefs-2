
const ShowAddModal = document.querySelector(".add");
const overlayA = document.querySelector(".clickov");
const AddModal = document.querySelector(".addForm");
const rayon  = document.querySelector('.rayon');
const error = document.querySelector('.error');
const save = document.querySelector('.save')

ShowAddModal.addEventListener("click", (e) => {
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
        id_admin_center: 26,
        rayon: rayon.value,
    };
    fetch(`http://localhost:8082/AdminRayon`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
    })
        .then((res) => {
            if (res.status == 200) {

                fetch(`http://localhost:8082/validation/RA`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: admin.email }),
                }).then(() => location.replace('/RChefManage'))
            }else {
                error.classList.remove("hidden");
                setTimeout(() => {
                error.classList.add("hidden");
                }, 2000);
            }
        })

       
});
// show rayon 
const df = document.createDocumentFragment();
fetch("http://localhost:8082/rayon")
  .then((res) => res.json())
  .then((data) => {
    data.map((rayon) => {
      const option = document.createElement("option");

      option.value = rayon.name;
      option.appendChild(document.createTextNode(rayon.name));
      df.appendChild(option);
    });

    rayon.appendChild(df);
  });