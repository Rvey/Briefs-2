const ctxB = document.getElementById('myChartBar').getContext('2d');
let approvedPromo = []
let chefName = []
let labels = []
fetch('http://localhost:8082/adminRayon').then(res => res.json()).then(data => {
    data.map((el) => {
        chefName.push(el.firstName)
        approvedPromo.push(parseInt(el.approvedPromo))
        labels.push(parseInt(el.approvedPromo))
    })
}).then(() => {
    const dataBar = {
        labels: chefName,
        datasets: [{
            label: 'Total Approved Promo for each chef rayon',
            data: approvedPromo,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };
    const configB = {
        type: 'bar',
        data: dataBar,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };
    const myChartB = new Chart(ctxB, configB)
})