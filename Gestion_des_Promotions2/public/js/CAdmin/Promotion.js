
const ShowAddModal = document.querySelector(".add");
const overlayA = document.querySelector(".clickov");
const AddModal = document.querySelector(".addForm");
const center = document.querySelector(".center");
const error = document.querySelector(".error");
const save = document.querySelector(".save");
const products = document.querySelector(".product");
const rayon = document.querySelector(".rayon");
const expiration = document.querySelector(".expiration");
const datePicker = document.querySelector('.datePicker')


// set the current day to input value 
const date = new Date();
datePicker.value = date.toISOString().substring(0, 10);


// show add promo modal 
ShowAddModal.addEventListener("click", (e) => {
  fetch("http://localhost:8082/AdminCenter");
  AddModal.classList.remove("hidden");
});

overlayA.addEventListener("click", (e) => {
  AddModal.classList.add("hidden");
});
const formatDate = (date) => {
  let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2)
      month = '0' + month;
  if (day.length < 2)
      day = '0' + day;

  return [year, month, day].join('-');
}

const reservedDates = []
// const currentAdmin = JSON.parse(sessionStorage('admin'))
// add mew promotion

save.addEventListener("click", (e) => {

  fetch('http://localhost:8082/promotion').then((res) => res.json()).then((data) => {
    data.map((el) => {
    
        reservedDates.push(formatDate(el.created_at))
      
    })
  })
  .then(() => {
    
    const dup = reservedDates.find((dae) => dae == datePicker.value)
    if (dup) {
      error.innerHTML = `you cannot create multiple promotion in the same day`
      setTimeout(() => {
        error.innerHTML = ``
      }, 2000)
    }else {
        const promotion = {
          promotion: AddModal.promotion.value,
          expiration: expiration.value,
          created_at: formatDate(datePicker.value),
          rayon: rayon.value,
          product: products.options[products.selectedIndex].text,
          productPrice: products.value,
          id_admin_center: currentAdmin.id,
          status: "onHold",
        };

        fetch(`http://localhost:8082/promotion`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(promotion),
        }).then((res) => 
      {  if (res.status == 201) {
          location.replace('/ManagePromotion')
        }else {
          error.innerHTML = `cannot set promotion greater than 20% for multimedia`
          setTimeout(() => {
            error.innerHTML = ``
          }, 2000)
        }
      
      }
        )
    }
    // console.log(dup);
 
  })



});



// show promotion
fetch("http://localhost:8082/promotion")
  .then((res) => res.json())
  .then((data) => {
    data.map((promo) => {
      tbodyPromo.innerHTML += `
            <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-b-[2px] border-gray-100 hover:bg-gray-100">
            <td class="p-3 truncate">${promo.promotion} %</td>
            <td class="p-3 truncate">${promo.product}</td>
            <td class="p-3 truncate">${promo.rayon}</td>
            <td class="p-3 truncate">${promo.expiration}</td>
            <td class="p-3 truncate">${promo.created_at}</td>
            <td class="p-3 truncate">${promo.status}</td>
            <td class="p-3 text-red-400 text-center font-bold hover:text-red-600 hover:font-medium cursor-pointer">
            <input type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer edit" value="Edit" id="${promo.id}"/>
            </td>
          </tr>
          `;
    });
  });

// show products
const df = document.createDocumentFragment();

fetch("http://localhost:8082/Products")
  .then((res) => res.json())
  .then((data) => {
    data.map((product) => {
      if (product.price < 50) return;
      const option = document.createElement("option");
      option.value = product.price;
      option.appendChild(document.createTextNode(product.name));
      df.appendChild(option);
    });

    products.appendChild(df);
  });
// show rayon
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
    Erayon.appendChild(df);
  });

  // update promotion





