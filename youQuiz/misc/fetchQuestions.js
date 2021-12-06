const endPoint = "http://localhost:3000/questions/";


const fetchQuestions = (dataArray) => {
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => dataArray.push(...data));
  };


  const getTestPre = () => {
    fetch(testPresPort)
    .then((response) => response.json())
    .then((data) =>  sessionStorage.setItem('testPres' , JSON.stringify(data)));
  }
  