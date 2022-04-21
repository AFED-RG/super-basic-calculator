// VARIABLES

const x = document.querySelector('.first-number')
const y = document.querySelector('.second-number')
const r = document.querySelector('.result-screen')

// OPERATORS BUTTONS
const addBtn = document.querySelector('.addBtn')
const subBtn = document.querySelector('.subBtn')
const mulBtn = document.querySelector('.mulBtn')
const divBtn = document.querySelector('.divBtn')
const clrBtn = document.querySelector('.clrBtn')

addBtn.addEventListener('click', () => {
    r.value = parseInt(x.value) + parseInt(y.value)
})

subBtn.addEventListener('click', () => {
    r.value = parseInt(x.value) - parseInt(y.value)
})

mulBtn.addEventListener('click', () => {
    r.value = parseInt(x.value) * parseInt(y.value)
})


divBtn.addEventListener('click', () => {
    r.value = parseInt(x.value) / parseInt(y.value)
})


clrBtn.addEventListener('click', () => {
    r.value = ""
    x.value = ""
    y.value = ""
})