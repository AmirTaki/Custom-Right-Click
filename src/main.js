const img = document.getElementById('image')
const menu = document.querySelector("#menu")


document.addEventListener("contextmenu",(event) => {
    menu.style.display = "block";
    menu.style.left = event.clientX + "px";
    menu.style.top = event.clientY + "px" ;
    event.preventDefault();

})

document.addEventListener("click", (e) => {
    menu.style.display = 'none'
})