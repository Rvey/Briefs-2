const reload = document.querySelector(".reload");
const datePicker = document.querySelector(".datePicker");

datePicker.min = new Date().toLocaleDateString("en-ca");
datePicker.value = new Date().toLocaleDateString("en-ca");

datePicker.addEventListener("input", (e) => {
  const day = new Date(datePicker.value).getUTCDay();
  if ([6, 0].includes(day)) {
    e.preventDefault();
    datePicker.value = "";
    datePicker.style.backgroundColor = 'red' 
    return false;
  }
  //   if ([6, 0].includes(day)) {
  //   console.log(day);
  //   }
});
