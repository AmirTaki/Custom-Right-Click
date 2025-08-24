const img = document.getElementById('image')
const menu = document.querySelector("#menu")


document.addEventListener("contextmenu",(event) => {
    menu.style.display = "block";
    menu.style.left = event.y + "px";
    menu.style.top = event.x + "px" ;
    event.preventDefault();

})

