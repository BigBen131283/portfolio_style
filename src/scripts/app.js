// Bouncing letters
// continue animation after the hover

const animatedLetters = document.querySelectorAll(".animated");
console.log(typeof animatedLetters);
console.log(animatedLetters.length);

// console.log(animatedLetters);

animatedLetters.forEach((element) => {
    element.addEventListener("mouseover", (e) => bounce(e.target));
})


function bounce(letter){
    if(!letter.classList.contains('bounce')){
        letter.classList.add('bounce');
        setTimeout(
            () => {
                letter.classList.remove('bounce');
            }, 1000
        );
    }
}
