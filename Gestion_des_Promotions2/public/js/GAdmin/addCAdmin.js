const ShowAddModal = document.querySelector('.add')
const overlayA = document.querySelector('.clickov')
const AddModal = document.querySelector('.addForm')

ShowAddModal.addEventListener('click', e => {
    AddModal.classList.remove('hidden')
})

overlayA.addEventListener('click', e => {
    AddModal.classList.add('hidden')
})

// add mew admin
save.addEventListener('click', e => {
    const admin = {
        firstName: AddModal.firstName.value,
        lastName: AddModal.lastName.value,
        email: AddModal.email.value,
        vocation: 'no'
    }
    console.log(admin);
})