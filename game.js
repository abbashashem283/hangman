const data = {
    "Magician":"A Person who performs magic",
    "Carpenter": "A Person who works with wood",
    "Black Smith": "A Person who shapes iron"
}

let chosen_word


function getChosenWord() {
    let keys = Object.keys(data);
    let index = getRandomNumber(keys.length);
    return keys[index]
}


function getRandomNumber(range) {
    return Math.floor(Math.random() * range)
}

function lettersToShow(word_length){
    return Math.floor(word_length * 0.3)
}

function positionsOfDisplay() {

}

