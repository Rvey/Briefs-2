const download = document.querySelector(".download");

const jsonData = JSON.parse(sessionStorage.getItem('candidates'))

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

  download.setAttribute("href", dataUri);
  download.setAttribute("download", exportFileDefaultName);
};

download.addEventListener("click", (e) => {
  csvConverter(jsonData);
});
