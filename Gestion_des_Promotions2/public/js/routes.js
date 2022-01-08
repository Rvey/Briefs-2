const header = document.querySelector('.header')
const currentAdmin = JSON.parse(sessionStorage.getItem('admin'))

if (currentAdmin.role == 'RA') {
    header.innerHTML = `<a href="http://localhost:8082/promotionPanel" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Promotion Panel</a>`
} else if (currentAdmin.role == 'CA') {
    header.innerHTML = `
        <a href="http://localhost:8082/ManagePromotion" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Manage Promotion</a>
        <a href="http://localhost:8082/RChefManage" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Manage chef Rayon</a> 
        `
} else if (currentAdmin.role == 'GA') {
    header.innerHTML = `
        <a href="http://localhost:8082/Statistics" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Statistics</a>
        <a href="http://localhost:8082/GAdminDash" class="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Manage CenterAdmin</a>
        `
}




