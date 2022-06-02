/* Carousel_discover version Desktop */

const photo_carousel = document.querySelectorAll(".photo_carousel");
const carousel_1 = document.querySelector(".carousel_1");
const carousel_2 = document.querySelector(".carousel_2");
const carousel_3 = document.querySelector(".carousel_3");
const carousel_4 = document.querySelector(".carousel_4");

carousel_1.onclick = function() {
    photo_carousel.forEach(element => {
        if (element.classList.contains("activate") && element.classList[1] != "carousel_1" ) {
            element.classList.add("last");
        } else if (element.classList.contains("last")){
            element.classList.remove("last");
        }
        element.classList.remove("activate");
        element.children[0].classList.add("hiden");
        });
    carousel_1.classList.add("activate");
    carousel_1.children[0].classList.remove("hiden");

}

carousel_2.onclick = function() {
    photo_carousel.forEach(element => {
        if (element.classList.contains("activate") && element.classList[1] != "carousel_2" ) {
            element.classList.add("last");
        } else if (element.classList.contains("last")){
            element.classList.remove("last");
        }
        element.classList.remove("activate");
        element.children[0].classList.add("hiden");
        });
    carousel_2.classList.add("activate");
    carousel_2.children[0].classList.remove("hiden");

}

carousel_3.onclick = function() {
    photo_carousel.forEach(element => {
        if (element.classList.contains("activate") && element.classList[1] != "carousel_3" ) {
            element.classList.add("last");
        } else if (element.classList.contains("last")){
            element.classList.remove("last");
        }
        element.classList.remove("activate");
        element.children[0].classList.add("hiden");
        });
    carousel_3.classList.add("activate");
    carousel_3.children[0].classList.remove("hiden");

}

carousel_4.onclick = function() {
    photo_carousel.forEach(element => {
        if (element.classList.contains("activate") && element.classList[1] != "carousel_4" ) {
            element.classList.add("last");
        } else if (element.classList.contains("last")){
            element.classList.remove("last");
        }
        element.children[0].classList.add("hiden");
        element.classList.remove("activate");
        });
    carousel_4.classList.add("activate");
    carousel_4.children[0].classList.remove("hiden");
}



/* Scroll fixed or relative for BarNav */

// const navigation = document.getElementById("navigation");
// const top_of_page = document.getElementById("top_of_page")
// const scroll = top_of_page.offsetTop;

// window.onscroll = function() {
//     console.log(scroll)
//     if (scroll >= 400) {
//         navigation.addClass("relative");
//         console.log(ok)
//     } else {
//         navigation.removeClass("relative");
//     }
// }

