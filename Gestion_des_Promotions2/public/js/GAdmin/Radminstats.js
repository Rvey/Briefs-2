const bar = document.querySelector(".bar");
const RAtbody = document.querySelector(".RAtbody");

fetch("http://localhost:8082/adminRayon")
  .then((res) => res.json())
  .then((data) => {
    data.map((admin) => {
      RAtbody.innerHTML += `   
    <tr>
    <th
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      ${admin.email}
    </th>
    <th
    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
    ${admin.rayon}
    </th>
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      2,645
    </td>
    </tr>`;
    });
  });
