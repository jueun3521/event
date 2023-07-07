window.onload = function () {
    var lightboxImage = document.querySelector("#lightboxImage");
    var pics = document.querySelectorAll(".pic");
    var lightBox = document.querySelector("#lightbox");

    // 반복문
    for (var i = 0; i < pics.length; i++){
        pics[i].addEventListener("click" , showlightBox)
    }
    function showlightBox() {
        // bigLocation = this.data=src;
        var bigLocation = this.getAttribute("data-src");
        // lightboxImage.src = bigLocation;
        lightboxImage.setAttribute("src" , bigLocation);
        lightBox.style.display = "block";
    }
    lightBox.onclick = function () {
        lightBox.style.display = "none";
    };
};