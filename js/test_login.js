const target  = document.querySelector(".menu-link1")
const target2  = document.querySelector(".menu-link2")
const target3  = document.querySelector(".menu-link3")
const target4  = document.querySelector(".menu-link4")
const target5  = document.querySelector(".menu-link5")
const target6  = document.querySelector(".menu-link6")
const bt = document.querySelector(".drawer_open")
bt.addEventListener("click",()=>{
  target.classList.toggle("active")
  target2.classList.toggle("active")
  target3.classList.toggle("active")
  target4.classList.toggle("active")
  target5.classList.toggle("active")
  target6.classList.toggle("active")
})
