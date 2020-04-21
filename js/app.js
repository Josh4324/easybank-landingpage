let ham = document.querySelector(".ham");
let nav = document.querySelector(".ulnav");
console.log(ham);


const toogleHam = () => {
    if (nav.classList.contains("animation1")) {
        ham.src = "../images/icon-hamburger.svg";
        nav.classList.remove("animation1");
        nav.classList.add("animation2");

    } else {
        ham.src = "../images/icon-close.svg";
        nav.classList.remove("animation2");
        nav.classList.add("animation1");
    }

}


ham.addEventListener("click", toogleHam);