let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let gif = document.getElementById("gif");
let noClickCount = 0;
let yesSize = 18;

let sadGifs = [
    "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
    "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif",
    "https://media.giphy.com/media/NTY1kHmcLsCsg/giphy.gif",
    "https://media.giphy.com/media/C2NagRFhSaUyQ/giphy.gif",
    "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",
    "https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif",
    "https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif"
];

let noMessages = [
    "Are you sure?",
    "Think about it!",
    "Don't take a rash decision!",
    "Please reconsider!",
    "Really? 😢",
    "This is your last chance...",
    "Okay, I give up... 😭"
];

noButton.addEventListener("click", function () {
    if (noClickCount < sadGifs.length) {
        gif.src = sadGifs[noClickCount];
        noButton.textContent = noMessages[noClickCount];
    }
    noClickCount++;

    yesSize += 15;
    yesButton.style.fontSize = yesSize + "px";

    if (noClickCount >= sadGifs.length) {
        noButton.style.display = "none";
    }
});

yesButton.addEventListener("click", function () {
    document.body.innerHTML = `
        <div class="yes-page">
            <div class="yes-box">
                <h1 class="yes-text">YAY! Thank you for being my Valentine! ❤️</h1>
                <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWh6M2FoeHMxdGhpb3Z5NTYxYzcydWUwang5ZzVxdjh5MmFlMDdyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/feX6tvRlIP3zO/giphy.gif" class="yesgif" alt="GIF">
            </div>
        </div>
    `;

    // Change background to the local image
    document.body.style.background = "url('yesvalentine.jpeg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
});
