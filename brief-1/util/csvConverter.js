const importCSV = document.querySelector(".import");

const jsonData = JSON.parse(sessionStorage.getItem("selectedStudent"));
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
  csvConverter(jsonData);
});
