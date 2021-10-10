// Menu =================
const targetItems = document.querySelectorAll(".targetItem");
const toggleBtn = document.querySelector(".toggler");
toggleBtn.addEventListener("click", handleToggler);

function handleToggler() {
    targetItems.forEach((item) => {
        item.classList.toggle("target");
    });
}

// Hero ================
const icons = document.querySelectorAll(".icon-con i");
let count = 1;

setInterval(() => {
    let presentActiveIcon = document.querySelector(".icon-con .show");
    presentActiveIcon.classList.remove("show");
    count++;
    if (count > icons.length) {
        icons[0].classList.add("show");
        count = 1;
    } else {
        presentActiveIcon.nextElementSibling.classList.add("show");
    }
}, 3000);
