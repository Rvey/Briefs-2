const tbodyPromo = document.querySelector(".tbodyPromo");
const Eduration = document.querySelector(".durationedit");
const f = document.querySelector("productedit");
const Erayon = document.querySelector(".rayonedit");
const productedit = document.querySelector(".productedit");
// modals

const UpdateModal = document.querySelector(".updateForm");
const confirmDModal = document.querySelector(".confirmModal");
// btn modal trigger
const ShowUpdateModal = document.querySelector(".edit");

// modals overlay
const overlay = document.querySelector(".click");

// modals btn
const confirmDelete = document.querySelector(".deleteConfirm");
const cancelDelete = document.querySelector(".cancelDelete");
const remove = document.querySelector(".delete");
const update = document.querySelector(".update");

overlay.addEventListener("click", (e) => {
  UpdateModal.classList.add("hidden");
});

// show selected admin data in modal

tbodyPromo.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit"))
    // fetch the product from db
    fetch("http://localhost:8082/Products")
      .then((res) => res.json())
      .then((data) => {
        data.map((product) => {
          if (product.price < 50) return;
          const option = document.createElement("option");
          option.value = product.name;
          option.appendChild(document.createTextNode(product.name));
          df.appendChild(option);
          
        });

        productedit.appendChild(df);
      });

  // fetch rayon from db

  fetch("http://localhost:8082/rayon")
    .then((res) => res.json())
    .then((data) => {
      data.map((product) => {
        if (product.price < 50) return;
        const option = document.createElement("option");
        option.value = product.name;
        option.appendChild(document.createTextNode(product.name));
        df.appendChild(option);
      });

      Erayon.appendChild(df);
    });

  fetch(`http://localhost:8082/promotion/${e.target.id}`)
    .then((res) => res.json())
    .then((data) => {
      (UpdateModal.promotion.value = data.promotion),
        (Eduration.value = data.expiration),
        (Erayon.value = data.rayon),
        (productedit.value = data.product),
        update.setAttribute("id", data.id);
      remove.setAttribute("id", data.id);
    });
  UpdateModal.classList.remove("hidden");
});

// update admin info

update.addEventListener("click", (e) => {
  const promo = {
    promotion: UpdateModal.promotion.value,
    expiration: Eduration.value,
    created_at: datePicker.value,
    rayon: Erayon.value,
    product: productedit.value,
    is_center_admin: "1",
    status:"notHandled"
  };
  fetch(`http://localhost:8082/updatePromo/${e.target.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(promo),
  }).then((res) => {
      if (res.status == 200) {
          location.replace('/ManagePromotion')
      } else {
          console.log('wrong creds');
      }
  })
});

// remove admin
remove.addEventListener("click", (e) => {
  confirmDelete.setAttribute("id", e.target.id);
  confirmDModal.classList.remove("hidden");
  UpdateModal.classList.add("hidden");
});

confirmDelete.addEventListener("click", (e) => {
  fetch(`http://localhost:8082/deletePromo/${e.target.id}`, {
    method: "DELETE",
  })
    .then(() => location.replace("/ManagePromotion"))
    .catch((err) => console.log(err));
});
cancelDelete.addEventListener("click", (e) => {
  confirmDModal.classList.add("hidden");
});
