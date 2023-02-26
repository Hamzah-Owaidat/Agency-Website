let btn = document.getElementById("button");

window.onscroll = function () { 
    if (window.scrollY >= 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })    
}