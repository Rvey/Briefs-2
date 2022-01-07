const tbodyPromo = document.querySelector('.tbodyPromo')

fetch('http://localhost:8082/promotion')
    .then(res => res.json())
    .then((data) => {
        data.map((promo) => {
            tbodyPromo.innerHTML += `
            <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-b-[2px] border-gray-100 hover:bg-gray-100">
            <td class="p-3 truncate">${promo.promotion}</td>
            <td class="p-3 truncate">${promo.date_promotion}</td>
            <td class="p-3 truncate">${promo.status}</td>
            <td class="p-3 text-red-400 text-center font-bold hover:text-red-600 hover:font-medium cursor-pointer">
            <input type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer" value="Edit" id="${promo.id}"/>
            </td>
          </tr>
          `
        })

    })