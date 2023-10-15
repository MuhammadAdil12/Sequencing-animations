const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const alice1 = document.querySelector(".alice1");
const alice2 = document.querySelector(".alice2");
const alice3 = document.querySelector(".alice3");

function play() {
    alice1.animate(aliceTumbling, aliceTiming).finished
        .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
        .then(() => alice3.animate(aliceTumbling, aliceTiming));
}

play();


//! more practice code 


// const aliceTumbling = [
//     { transform: "translateY(0)" },
//     { transform: "translateX(-5%)" },
//     { transform: "translateX(15%)" }
// ];

// const aliceTumbling2 = [
//     { transform: "translateY(0)" },
//     { transform: "translateX(-100%)" }
// ];

// const aliceTumbling3 = [
//     { transform: "translateY(0)" },
//     { transform: "translateX(-100%)" }
// ];

// const aliceTumbling22 = [
//     { transform: "translateY(0)" },
//     { transform: "translateX(40%)" }
// ];

// const aliceTiming = {
//     duration: 2000,
//     iterations: 1,
//     fill: 'backwards'
// }
// const bg = document.querySelector("#alice-main-div")
// const alice1 = document.querySelector(".alice1");
// const alice2 = document.querySelector(".alice2");
// const alice3 = document.querySelector(".alice3");

// function play() {
//     alice1.animate(aliceTumbling, aliceTiming).finished
//         .then(() => alice2.animate(aliceTumbling2, aliceTiming).finished)
//         .then(() => alice2.style.display = "none")
//         .then(() => bg.style.background = "salmon")
//         .then(() => alice3.animate(aliceTumbling3, aliceTiming).finished)
//         .then(() => alice3.style.display = "none")
//         .then(() => bg.style.background = "green")
//         .then(() => alice1.animate(aliceTumbling22, aliceTiming))
// }

// play();
