const ctx = document.getElementById('myChartPie').getContext('2d');
let RACount = 0
let CACount = 0
let HPromo = 0
let Promo = 0

fetch('http://localhost:8082/AdminCenter/').then(res => res.json()).then(data => {
    data.map((el) => {
        CACount++
        sessionStorage.setItem('CACount', CACount)
    })
})
fetch('http://localhost:8082/adminRayon').then(res => res.json()).then(data => {
    data.map((el) => {
        RACount++
        sessionStorage.setItem('RACount', RACount)
    })
})
fetch('http://localhost:8082/promotion').then(res => res.json()).then(data => {
    data.map((el) => {
        if (el.status == 'Approved') {
            HPromo++
            sessionStorage.setItem('HPromo', HPromo)
            
        }
        Promo++
        sessionStorage.setItem('Promo', Promo)
    })
})

const CAC = JSON.parse(sessionStorage.getItem('CACount'))
const RAC = JSON.parse(sessionStorage.getItem('RACount'))
const HP = JSON.parse(sessionStorage.getItem('HPromo'))
const Promotions = JSON.parse(sessionStorage.getItem('Promo'))



const data = {
    labels: [
        'Admin Center',
        'Chef Rayon',
        'handled promotion',
        'total promotion',
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [CAC, RAC, HP, Promotions],
        backgroundColor: [
            'rgb(252, 95, 95)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(29, 193, 106)',
        ],
        hoverOffset: 4
    }]
};
const config = {
    type: 'doughnut',
    data: data,
};

const myChart = new Chart(ctx, config)