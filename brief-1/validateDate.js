const validate = (dateString) => {
  const day = new Date(dateString).getDate();
  if (day == 0 || day == 6) {
    return false;
  }
  return true;
};

date.addEventListener("change", (e) => {
  if (!validate(e.target.value)) {
    e.target.value = "";
    console.log("ehe");
  }
});
