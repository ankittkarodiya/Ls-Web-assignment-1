let close = document.querySelector("#close");
let menu = document.querySelector("#menu");
let navMenu = document.querySelector("#nav div ul");
let h2 = document.querySelector("#nav div h2");
let a = document.querySelectorAll("#nav div ul li a");
let gameName = document.querySelector("#gameName");

let menuIconDisplay = "yes";
menu.addEventListener("click", ()=>{
    if(menuIconDisplay==="yes"){
    menu.style.display = "none";
    close.style.display = "block";
    navMenu.style.display = "block";
    // navMenu.classList.remove("remove");
    // navMenu.classList.add("show");
    gameName.style.borderBottom = "1px solid white";
    menuIconDisplay = "no";
    }
});
close.addEventListener("click", ()=>{
    if(menuIconDisplay==="no"){
    close.style.display = "none"
    menu.style.display = "block";
    navMenu.style.display = "none";
    // navMenu.classList.remove("show");
    // navMenu.classList.add("remove");
    gameName.style.borderBottom = "none";
    menuIconDisplay = "yes";
    }
});
a.forEach((el)=>{

    el.addEventListener("click", ()=>{
        close.style.display = "none"
        menu.style.display = "block";
        navMenu.style.display = "none";
        gameName.style.borderBottom = "none";
        menuIconDisplay = "yes";

    });

});