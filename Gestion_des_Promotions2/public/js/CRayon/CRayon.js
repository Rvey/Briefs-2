const tbody = document.querySelector(".tbody")
// const currentAdmin = JSON.parse(sessionStorage('admin'))
tbody.addEventListener('click', e => {
    if (e.target.classList.contains('approve'))
    fetch(`http://localhost:8082/updatePromoStatus/${e.target.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({status: 'Approved',
        email: currentAdmin.email , 
        rayon: currentAdmin.rayon,
        RA_id: currentAdmin.id 
    }),
    })
    .then((res) => {
        if (res.status == 201) {
            location.replace('/promotionPanel')
        }
    })
})
// set the current day to input value 
const date = new Date();
const datePicker = date.toISOString().substring(0, 10);


// show promotion
fetch("http://localhost:8082/promotion")
    .then((res) => res.json())
    .then((data) => {
        data.map((promo) => {
            if (currentAdmin.rayon == promo.rayon && datePicker == formatDate(promo.created_at)) {
                tbody.innerHTML += `
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-b-[2px] border-gray-100 hover:bg-gray-100">
                <td class="p-3 truncate">${promo.promotion} %</td>
                <td class="p-3 truncate">${promo.rayon}</td>
                <td class="p-3 truncate">${promo.product}</td>
                <td class="p-3 truncate">${promo.expiration}</td>
                <td class="p-3 truncate"> ${formatDate(promo.created_at)}</td>
                <td class="p-3 truncate">${promo.loyalty_points}</td>
                <td class="p-3 truncate">${promo.status}</td>
                ${ promo.status !== 'Approved' ?
            ` 
            <td class="p-3 text-center">
            <input type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer approve" value="Approve" id="${promo.id}"/>
            </td>   
            `
            :
            `  
            <td class="p-3 text-center">
            <input type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer approve" value="Approved" id="${promo.id}" disabled/>
            </td>
            `
        }     
              </tr>
              `;
            }
        });
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