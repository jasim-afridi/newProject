const toggler = document.querySelector(".toggler")

toggler.addEventListener("click", function(){
    const menuTimes = document.getElementById("menuTimes")
    const menuBars = document.getElementById("menuBars");
    const bottomNav = document.querySelector(".bottom_nav")
    menuTimes.classList.toggle("hide");
    menuBars.classList.toggle("show");
    bottomNav.classList.toggle("active")
    // console.log("you clicked me")
})