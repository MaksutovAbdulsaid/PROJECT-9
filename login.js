const form = document.forms['form']
const email = form.elements['email']
const password = form.elements['password']

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if(email.value.includes("@") && password.value.length >= 4) {
        if(email.value === savedEmail && password.value === savedPassword) {
            window.location.href = 'index.html'
        } else {
            alert('Не верный email или пароль')
        }
    } else {
        alert('Ошибка, убедитесь что email содерижит @ или пароль больше 4 символов')
    }
})