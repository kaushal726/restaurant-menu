let veg = document.querySelectorAll(".veg");
let nonveg = document.querySelectorAll(".nonveg");
let burger = document.getElementById("burger")
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var myBtn = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function hidenonveg() {
    nonveg.forEach((element) => {
        element.style.display = "none";
    })
    veg.forEach((element) => {
        element.style.display = "block";
    })
    burger.classList.add("animated-section")
    // document.body.style.background = "green";

}

function hideveg() {
    veg.forEach((element) => {
        element.style.display = "none";
    })
    nonveg.forEach((element) => {
        element.style.display = "block";
    })
    burger.classList.remove("animated-section")
    // document.body.style.background = "red";
}

function appearall() {
    veg.forEach((element) => {
        element.style.display = "block";
    })
    nonveg.forEach((element) => {
        element.style.display = "block";
    })

    burger.classList.add("animated-section")
    // document.body.style.background = "white";

}

const sections = document.querySelectorAll('.animated-section');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.9;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('appear');
        } else {
            section.classList.remove('appear');
        }
    });
});
