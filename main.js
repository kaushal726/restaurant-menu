let veg = document.querySelectorAll(".veg");
let nonveg = document.querySelectorAll(".nonveg");
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


console.log({ veg, nonveg });
function hidenonveg() {
    nonveg.forEach((element) => {
        element.style.display = "none";
    })
    veg.forEach((element) => {
        element.style.display = "block";
    })
    // document.body.style.background = "green";

}

function hideveg() {
    veg.forEach((element) => {
        element.style.display = "none";
    })
    nonveg.forEach((element) => {
        element.style.display = "block";
    })
    // document.body.style.background = "red";
}

function appearall() {
    veg.forEach((element) => {
        element.style.display = "block";
    })
    nonveg.forEach((element) => {
        element.style.display = "block";
    })
    // document.body.style.background = "white";

}

