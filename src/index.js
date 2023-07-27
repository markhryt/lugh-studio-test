import './index.css'; 

const button = document.getElementById('contact')
const form = document.getElementById('email-form')
button.addEventListener('click',()=>{
    form.style.display = 'block'
})