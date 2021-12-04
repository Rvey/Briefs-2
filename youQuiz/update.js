
const updateCandidate = (candidate, id) => {
    fetch(`http://localhost:3000/candidates/${id}`, {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(candidate),
    })
  };
