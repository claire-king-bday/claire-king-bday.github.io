
const photo = document.getElementById("claire-photo");
let flipped = false;
let count = 0;

const interval = setInterval(() => {
    if (flipped) {
        photo.src = "2.png";
    } else {
        photo.src = "2-flip.png";
    }

    flipped = !flipped;
    count++;

    // Stop after 8 switches
    if (count >= 8) {
        clearInterval(interval);
        photo.src = "2.png";
    }
}, 530);

