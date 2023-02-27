//<div class="letter"></div>
window.onkeypress = (e) => {console.log(e.key)}

const data = {
    "Magician":"A Person who performs magic",
    "Carpenter": "A Person who works with wood",
    "Black Smith": "A Person who shapes iron"
}

const prompt = document.getElementById("prompt")
const word_definition = document.getElementById("definition")
const letters = document.getElementById("letters")

let chosen_word , display_positions;

newRound();
setUpLetters();

function newRound() {
    chosen_word = getChosenWord()
    display_positions = positionsOfDisplay()
}

function setUpLetters() {
    letters.innerHTML = ""
    for(let i=0 ; i<chosen_word.length ; ++i){
        let letter = ""
        if(display_positions.has(i))
            letter = '<div class="letter">'+chosen_word[i]+'</div>'
        else
            letter = '<div class="letter"></div>'
        letters.innerHTML += letter
    }
}

console.log(chosen_word)

function getChosenWord() {
    let keys = Object.keys(data);
    let index = getRandomNumber(keys.length);
    return keys[index]
}


function getRandomNumber(range) {
    return Math.floor(Math.random() * range)
}

function lettersToShow(){
    return Math.floor(chosen_word.length * 0.3)
}

function positionsOfDisplay() {
    let letters = lettersToShow()
    let positions = new Set()
    for(let i=0 ; i<letters; ++i) {
        let position = getRandomNumber(chosen_word.length)
        if(positions.has(position)){
            --i;
            continue;
        }
        positions.add(position)
    }
    return positions
}


