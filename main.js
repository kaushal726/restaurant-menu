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




