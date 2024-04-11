const elementosDuvida = document.querySelectorAll('.duvida');
const hamburguer = document.getElementById('hamburguer');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-link');

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener('click', function () {
    duvida.classList.toggle('ativa')
  })
})
navItems.forEach(function (item) {
  item.addEventListener('click', function () {
    navMenu.classList.toggle("active");
  })
})

hamburguer.addEventListener("click", function () {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
  hamburguer.classList.remove("active");
  navMenu.classList.remove("active");
}))
