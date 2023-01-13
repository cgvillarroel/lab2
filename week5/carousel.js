let current_slide = 0

const slides = document.getElementsByClassName("carousel_img");
const titles = document.getElementsByClassName("carousel_title");
const descs = document.getElementsByClassName("carousel_desc");
const nav_buttons = document.getElementsByClassName("carousel_btn");

function show_slide(slide_idx) {
    for (i = 0; i < slides.length; i++) {
        if (i == slide_idx) {
            slides[i].style.display = "block";
            titles[i].style.display = "block";
            descs[i].style.display = "block";
            nav_buttons[i].style.textDecoration = "underline";
        }
        else {
            slides[i].style.display = "none";
            titles[i].style.display = "none";
            descs[i].style.display = "none";
            nav_buttons[i].style.textDecoration = "none";
        }
    }
}

function move_slide(dir) {
    // javascript can't handle negative modulus
    dir = dir == 1 ? 1 : slides.length + 1;
    current_slide = (current_slide + dir) % slides.length;
    show_slide (current_slide)
}

show_slide(current_slide)
