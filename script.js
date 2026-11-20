const images = [
    "https://picsum.photos/id/1015/900/600",
    "https://picsum.photos/id/1016/900/600",
    "https://picsum.photos/id/1025/900/600",
    "https://picsum.photos/id/1035/900/600",
    "https://picsum.photos/id/1043/900/600",
    "https://picsum.photos/id/106/900/600"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;

    document.getElementById("largeImage").src =
        images[currentIndex];

    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex =
        (currentIndex + direction + images.length) % images.length;

    document.getElementById("largeImage").src =
        images[currentIndex];
}