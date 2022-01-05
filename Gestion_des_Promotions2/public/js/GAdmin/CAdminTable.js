const tbody = document.querySelector('.tbody')
const vocation = document.querySelector('.vacation')
// modals
const AddModal = document.querySelector('.addForm')
const UpdateModal = document.querySelector('.updateForm')
// btn modal trigger
const ShowAddModal = document.querySelector('.add')
const ShowUpdateModal = document.querySelector('.edit')

// modals overlay
const overlay = document.querySelector('.click')
const overlayA = document.querySelector('.clickov')

// modals btn
const remove = document.querySelector('.delete')
const update = document.querySelector('.update')
const save = document.querySelector('.save')


// 

overlayA.addEventListener('click', e => {
    AddModal.classList.add('hidden')
})
overlay.addEventListener('click', e => {
    UpdateModal.classList.add('hidden')
})

ShowAddModal.addEventListener('click', e => {
    AddModal.classList.remove('hidden')
})

// add mew admin
save.addEventListener('click', e => {
    const admin = {
        firstName: 'redone',
        lastName: 'one',
        email: 'rredouane342@gmail.com',
        vocation: 'no'
    }
    console.log(admin);
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
                    vocation.value = data.vocation

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
        vocation: vocation.value

    }
    console.log(admin);

})

// remove admin 
remove.addEventListener('click', e => {
    console.log('remove');
})



// Center admin table
fetch('http://localhost:8082/AdminCenter/')
    .then(res => res.json())
    .then((data) => {
        data.map((admin) => {
            tbody.innerHTML += `
        <tr>
        <th
          class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
          ${admin.firstName}
        </th>
        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          ${admin.email}
        </td>
        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          ${admin.vocation}
        </td>
        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <input class="px-3 py-1 text-center bg-indigo-500 rounded-md text-white font-semibold cursor-pointer edit" value="Edit" id="${admin.id}"/>
        </td>
      </tr>
        `
        })
    })