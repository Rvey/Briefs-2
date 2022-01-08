const tbody = document.querySelector('.tbody')
const vocation = document.querySelector('.vacation')
const centeredit = document.querySelector(".centeredit")
// modals

const UpdateModal = document.querySelector('.updateForm')
const confirmDModal = document.querySelector('.confirmModal')
// btn modal trigger
const ShowUpdateModal = document.querySelector('.edit')

// modals overlay
const overlay = document.querySelector('.click')


// modals btn
const confirmDelete = document.querySelector('.deleteConfirm')
const cancelDelete = document.querySelector('.cancelDelete')
const remove = document.querySelector('.delete')
const update = document.querySelector('.update')


overlay.addEventListener('click', e => {
    UpdateModal.classList.add('hidden')
})

// show selected admin data in modal 

tbody.addEventListener('click', e => {
    if (e.target.classList.contains("edit"))
        fetch(`http://localhost:8082/AdminCenter/${e.target.id}`)
            .then(res => res.json())
            .then(data => {
                UpdateModal.firstName.value = data.firstName,
                    UpdateModal.lastName.value = data.lastName,
                    UpdateModal.email.value = data.email,
                    UpdateModal.password.value = data.password,
                    centeredit.value = data.center,
                    vocation.value = data.vocation
                update.setAttribute("id", data.id);
                remove.setAttribute("id", data.id);
            })
    UpdateModal.classList.remove('hidden')
})

// update admin info 

update.addEventListener('click', e => {
    
    const admin = {
        firstName: UpdateModal.firstName.value,
        lastName: UpdateModal.lastName.value,
        email: UpdateModal.email.value,
        password: UpdateModal.password.value,
        center: centeredit.value,
        vocation: vocation.value

    }
    fetch(`http://localhost:8082/UpdateAdminCenter/${e.target.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
    }).then((res) => {
        if (res.status == 200) {
            location.replace('/GAdminDash')
        } else {
            console.log('wrong creds');
        }
    })
})

// remove admin 
remove.addEventListener('click', e => {
    confirmDelete.setAttribute("id", e.target.id);
    confirmDModal.classList.remove('hidden')
    UpdateModal.classList.add('hidden')
})

confirmDelete.addEventListener('click', e => {
    fetch(`http://localhost:8082/DeleteAdminCenter/${e.target.id}`, {
        method: 'DELETE',
    }).then(() => location.replace('/GAdminDash'))
        .catch((err) => console.log(err))
})
cancelDelete.addEventListener('click', e => {
    confirmDModal.classList.add('hidden')
})


// Center admin table
fetch('http://localhost:8082/AdminCenter/')
    .then(res => res.json())
    .then((data) => {
        data.map((admin) => {
            tbody.innerHTML += `
            <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-b-[2px] border-gray-100 hover:bg-gray-100">
            <td class="  p-3">${admin.firstName} ${admin.lastName}</td>
            <td class="  p-3 truncate">${admin.email}</td>
            <td class="  p-3 truncate">${admin.vocation}</td>
            <td class="  p-3 truncate">${admin.center}</td>
            <td class="  p-3 text-red-400 text-center font-bold hover:text-red-600 hover:font-medium">
            <input type="button" class="edit inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer" value="Edit" id="${admin.id}"/>
            </td>
          </tr> 
        `
        })

    })