const select = document.querySelector(".select");
const selected = document.querySelector(".selected");

const search = document.querySelector(".search");
fetch("http://localhost:5000/api/plans")
  .then((response) => response.json())
  .then((data) =>
    data.map((el) => {
      select.innerHTML += `<option class="option" value="${el.id}">${el.planName}</option>`;
    })
  );

search.addEventListener("click", (e) => {
  fetch(`http://localhost:5000/api/plan/${select.value}`)
    .then((response) => response.json())
    .then((data) => (selected.innerHTML = data.planName));
});

