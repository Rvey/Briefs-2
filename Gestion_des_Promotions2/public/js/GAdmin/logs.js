const tbodyLog = document.querySelector('.tbodyLog');
const importCSV = document.querySelector('.download')


// download excel file 

const jsonData = [];
const csvConverter = (locked) => {
    const items = locked;
    const replacer = (key, value) => (value === null ? "" : value);
    const header = Object.keys(items[0]);
    const csv = [
        header.join(","),
        ...items.map((row) =>
            header
                .map((fieldName) => JSON.stringify(row[fieldName], replacer))
                .join(",")
        ),
    ].join("\r\n");


    let dataUri = "data:text/csv;charset=utf-8," + csv;
    let exportFileDefaultName = "data.csv";

    importCSV.setAttribute("href", dataUri);
    importCSV.setAttribute("download", exportFileDefaultName);
};

importCSV.addEventListener("click", (e) => {
    fetch('http://localhost:8082/log').then((res) => {
        res.json().then((data) => {
            csvConverter(data);
        })
    })
});













fetch('http://localhost:8082/log').then((res) => res.json()).then((data) => {
    data.slice(0, 5).map((log) => {
        tbodyLog.innerHTML += `
    <tr>
        <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
            Promotion of <span class="font-semibold">${log.promotion}%</span>
        </td>
        <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
            <span class="font-semibold">  Email</span>  ${log.email}  ${"  ID : " + log.RA_id} 
        </td>
        <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
            ${log.product}
        </td>
        <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
            ${log.rayon}
        </td>
        <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
            ${log.created_at}
        </td>
    </tr>
    `

    })
})