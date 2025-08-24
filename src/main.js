const img = document.getElementById('image')
const menu = document.querySelector("#menu")
document.addEventListener("contextmenu",(e) => {
    menu.style.display = "block"
    e.preventDefault();

})

