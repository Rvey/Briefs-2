const totalCAdmin = document.querySelector(".totalCAdmin");
fetch("http://localhost:8082/AdminCenter/")
  .then((res) => res.json())
  .then((data) => {
      let count = 0;
      data.map((data) => {
          count++

      })
      totalCAdmin.innerHTML = count
  });
