function changeColor(){
    var navbar = document.querySelector(".navbar");
    var scrollValue = window.scrollY;
    if(scrollValue<200){
        navbar.classList.remove('bg-ahmed');
    }else{
        navbar.classList.add('bg-ahmed');

    }
}

window.addEventListener("scroll",changeColor);

// =============================

var mouse = setInterval(timer,1000);
function timer(){
    var x = new Date;
    document.querySelector("#watch").innerHTML = x.toLocaleTimeString();
}