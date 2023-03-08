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
    var time = 500; 
    var step = -window.pageYOffset / (time / 15);
    var timer = setInterval(function () {
        window.scrollBy(0, step);
        if (window.pageYOffset <= 0) {
            clearInterval(timer);
        }
    }, 15);
}




