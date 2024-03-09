
function ChangImage(filename) {
    let img = document.querySelector("#imgPreview");
    img.setAttribute("src", filename);
}



function togglePopup() {
    var popup = document.getElementById("myPopup");
    var overlay = document.getElementById("overlay");

    popup.classList.toggle("show");
    overlay.classList.toggle("show");
}
