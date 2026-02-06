let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

let size = 18;

noBtn.onclick = () => {
    size += 10;
    yesBtn.style.fontSize = size + "px";
};

yesBtn.onclick = () => {
    document.getElementById("proposal").classList.add("hidden");
    document.getElementById("valentine").classList.remove("hidden");
};

function openGift(num) {
    document.getElementById("gift1").classList.add("hidden");
    document.getElementById("gift2").classList.add("hidden");
    document.getElementById("gift3").classList.add("hidden");
    document.getElementById("gift" + num).classList.remove("hidden");
}

// Gift 1 question flow
let questions = document.querySelectorAll(".question");
let current = 0;

function nextQ() {
    questions[current].classList.remove("active");
    current++;
    if (current < questions.length) {
        questions[current].classList.add("active");
    }
}

function surprise() {
    alert("💖 I LOVE YOU FOREVER 💖");
}



