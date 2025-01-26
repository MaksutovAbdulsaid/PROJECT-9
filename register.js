const form = document.forms['form']
const name = form.elements['name']
const email = form.elements['email']
const password = form.elements['password']
const checkbox = form.elements['checkbox']

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(email.value.includes('@') && password.value.length > 4 && checkbox.checked == true) {
        localStorage.setItem('email', email.value.trim());
        localStorage.setItem('password', password.value.trim())
        window.location.href = 'index.html'
        } else {
        alert('ОШИБКА')
        }
})