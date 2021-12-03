const tableBody = document.querySelector(".Tbody");
const CandidatePort = "http://localhost:3000/candidates/";

fetch(CandidatePort)
.then((response) => response.json())
.then((data) => data.map((el) => {
    tableBody.innerHTML += `
    <tr>
    <td class="px-6 py-4 whitespace-nowrap">
       ${el.email}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        ${el.age}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
       ${el.date}
    </td>
    <td class="whitespace-nowrap truncate">
    <textarea cols="30" rows="2" readOnly class="bg-indigo-50 p-1 m-1"  >
    ${el.Motivation}
    </textarea>
    </td>
    
    <td class="whitespace-nowrap  truncate">
    <textarea cols="30" rows="2" readOnly class="bg-indigo-50 p-1" >
    ${el.seriousGames}
    </textarea>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-center">
       ${el.AdministrationScore}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-center">
    ${el.score}
 </td>
    </tr>
    `;
})
)

   // fetch(CandidatePort)
   //   .then((response) => response.json())
   //   .then((data) => sessionStorage.setItem("candidates" ,  JSON.stringify(data)))

 