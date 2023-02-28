//<div class="letter"></div>


const data = {
    "magician":"A Person who performs magic (magician)",
    "carpenter": "A Person who works with wood (carpenter)",
    "black smith": "A Person who shapes iron (black smith)",
    "apple pie": "A yummy dessert (apple pie)",
    "engineer": "A person who engineers stuff"
}

const prompt = document.getElementById("prompt")
const word_definition = document.getElementById("definition")
const letters = document.getElementById("letters")
const charachters = document.getElementsByClassName("letter")
const body_parts = document.getElementsByClassName("bpart");

let chosen_word , display_positions, game_state="initial", strikes=0;

newRound();
setUpLetters();

window.onkeyup = (e) => {
    if(game_state == "active"){
        console.log(chosen_word)
        validateCharacter(e.key)
    }
}


function newRound() {
    chosen_word = getChosenWord()
    display_positions = positionsOfDisplay()
    word_definition.innerText = `"${data[chosen_word]}"`
    game_state = "active"
}

function setUpLetters() {
    letters.innerHTML = ""
    for(let i=0 ; i<chosen_word.length ; ++i){
        let letter = ""
        if(display_positions.has(i)) {
            letter = '<div class="letter">' + chosen_word[i] + '</div>'
            maskChar(i)
        }else
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

function hangMan() {
    if(strikes == 5)
        looseGame()
    body_parts[strikes++].style.visibility = "visible"
}

function looseGame() {
    prompt.innerText= "YOU LOOSE!!!"
        game_state = "lost"
}

function winGame() {
    prompt.innerText= "YOU WIN!!!"
    game_state = "won"
}

function displayCharacter(char , position) {
    charachters[position].innerText = char;
    maskChar(position);
    if(chosen_word.trim().length == 0)
        winGame()
}

function maskChar(index) {
    chosen_word = chosen_word.substring(0,index)+" "+chosen_word.substring(index+1)
}

function validateCharacter(char) {
    let index = chosen_word.indexOf(char);
    console.log("kkk"+index+" "+chosen_word)
    if(index === -1)
        hangMan()
    else
        displayCharacter(char,index)
}


