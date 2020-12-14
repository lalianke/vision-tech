const toggleBtn = document.querySelector('.fa-bars')

const sideNav = document.querySelector('.nav-links')

toggleBtn.addEventListener('click' , function(){
    sideNav.classList.toggle('show-links')
})


console.log(document.innerWidth)
