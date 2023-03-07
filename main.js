window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var myBtn = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    var time = 500; // Scroll duration in milliseconds
    var step = -window.pageYOffset / (time / 15);
    var timer = setInterval(function () {
        window.scrollBy(0, step);
        if (window.pageYOffset <= 0) {
            clearInterval(timer);
        }
    }, 15);
}




